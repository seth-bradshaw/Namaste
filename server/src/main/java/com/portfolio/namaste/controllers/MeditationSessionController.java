package com.portfolio.namaste.controllers;

import com.portfolio.namaste.models.MeditationSession;
import com.portfolio.namaste.services.MeditationSessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/sessions")
public class MeditationSessionController
{
    @Autowired
    private MeditationSessionService meditationSessionService;

    @GetMapping(value = "/sessions", produces = "application/json")
    public ResponseEntity<?> getAllSessions()
    {
        List<MeditationSession> sessionList = meditationSessionService.findAllSessions();

        return new ResponseEntity<>(sessionList, HttpStatus.OK);
    }

    @GetMapping(value = "/session/{sessionId}", produces = "application/json")
    public ResponseEntity<?> getSessionById(@PathVariable long sessionId)
    {
        MeditationSession session = meditationSessionService.findSessionById(sessionId);

        return new ResponseEntity<>(session, HttpStatus.OK);
    }

    @PostMapping(value = "/sessions", consumes = "application/json")
    public ResponseEntity<?> addNewSession(@RequestBody @Valid MeditationSession newSession)
    {
        newSession.setMeditationSessionId(0);
        MeditationSession successfulSession = meditationSessionService.save(newSession);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(value = "/session/{sessionId}", consumes = "application/json")
    public ResponseEntity<?> addNewSession(@PathVariable long sessionId, @RequestBody @Valid MeditationSession editedSession)
    {
        editedSession.setMeditationSessionId(sessionId);
        MeditationSession updatedSession = meditationSessionService.save(editedSession);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/session/{sessionId}")
    public ResponseEntity<?> deleteSessionById(@PathVariable long sessionId)
    {
        meditationSessionService.deleteSessionById(sessionId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
