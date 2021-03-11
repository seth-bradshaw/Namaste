package com.portfolio.namaste.services;

import com.portfolio.namaste.models.MeditationSession;
import com.portfolio.namaste.repositories.MeditationSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Service(value = "meditationSessionService")
public class MeditationSessionServiceImpl implements MeditationSessionService
{
    @Autowired
    private MeditationSessionRepository meditationSessionRepository;

    @Override
    public MeditationSession save(MeditationSession session)
    {
        MeditationSession newSession = new MeditationSession();

        if (session.getMeditationSessionId() != 0)
        {
            findSessionById(session.getMeditationSessionId());
            newSession.setMeditationSessionId(session.getMeditationSessionId());
        }

        newSession.setSessionLength(session.getSessionLength());
        newSession.setTitle(session.getTitle());
        newSession.setDescription(session.getDescription());
        newSession.setVideoUrl(session.getVideoUrl());

        return meditationSessionRepository.save(newSession);
    }

    @Override
    public List<MeditationSession> findAllSessions()
    {
        List<MeditationSession> rtnSessionList = new ArrayList<>();
        meditationSessionRepository.findAll().iterator().forEachRemaining(rtnSessionList::add);

        return rtnSessionList;
    }

    @Override
    public MeditationSession findSessionById(long sessionId)
    {
        MeditationSession rtnSession = meditationSessionRepository.findById(sessionId)
                .orElseThrow(() -> new EntityNotFoundException("MeditationSession with id " + sessionId + " not found!"));

        return rtnSession;
    }

    @Override
    public void deleteSessionById(long sessionId)
    {
        meditationSessionRepository.deleteById(sessionId);
    }

}
