package com.portfolio.namaste.controllers;

import com.portfolio.namaste.models.Journal;
import com.portfolio.namaste.services.JournalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/journals")
public class JournalController
{
    @Autowired
    private JournalService journalService;

    @GetMapping(value = "/journals", produces = "application/json")
    public ResponseEntity<?> getAllJournals()
    {
        List<Journal> journalList = journalService.findAllJournals();

        return new ResponseEntity<>(journalList, HttpStatus.OK);
    }

    @GetMapping(value = "/user/{userId}", produces = "application/json")
    public ResponseEntity<?> getAllJournalsForUserId(@PathVariable long userId)
    {
        List<Journal> journalList = journalService.findAllJournalsForUserId(userId);

        return new ResponseEntity<>(journalList, HttpStatus.OK);
    }

    @GetMapping(value = "/journal/{journalId}", produces = "application/json")
    public ResponseEntity<?> getJournalById(@PathVariable long journalId)
    {
        Journal journal = journalService.findJournalById(journalId);

        return new ResponseEntity<>(journal, HttpStatus.OK);
    }

    @PostMapping(value = "/journals", consumes = "application/json")
    public ResponseEntity<?> addNewJournal(@RequestBody @Valid Journal newJournal)
    {
        System.out.println(newJournal);
        newJournal.setJournalId(0);
        Journal addedJournal = journalService.save(newJournal);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "/journal/{journalId}", consumes = "application/json")
    public ResponseEntity<?> editExistingJournalById(@PathVariable long journalId, @RequestBody @Valid Journal editedJournal)
    {
        editedJournal.setJournalId(journalId);
        Journal addedJournal = journalService.save(editedJournal);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/journal/{journalId}")
    public ResponseEntity<?> deleteJournalById(@PathVariable long journalId)
    {
        journalService.deleteJournalById(journalId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
