package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Journal;
import com.portfolio.namaste.models.User;
import com.portfolio.namaste.repositories.JournalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Service(value = "journalService")
public class JournalServiceImpl implements JournalService
{
    @Autowired
    private JournalRepository journalRepository;

    @Autowired
    private UserService userService;

    @Override
    public Journal save(Journal journal)
    {
        Journal newJournal = new Journal();

        if (journal.getJournalId() != 0)
        {
            findJournalById(journal.getJournalId());
            newJournal.setJournalId(journal.getJournalId());
        }

        newJournal.setTitle(journal.getTitle());
        newJournal.setTextBody(journal.getTextBody());
        newJournal.setMood(journal.getMood());

        if (journal.getUser() != null)
        {
            userService.findByUserId(journal.getUser().getUserId());
            newJournal.setUser(journal.getUser());
        }

        return journalRepository.save(newJournal);
    }

    @Override
    public Journal findJournalById(long journalId)
    {
        Journal rtnJournal = journalRepository.findById(journalId)
                .orElseThrow(() -> new EntityNotFoundException("Journal with id " + journalId + " not found!"));

        return rtnJournal;
    }

    @Override
    public List<Journal> findAllJournals()
    {
        List<Journal> rtnJournalList = new ArrayList<>();
        journalRepository.findAll().iterator().forEachRemaining(rtnJournalList::add);

        return rtnJournalList;
    }

    @Override
    public List<Journal> findAllJournalsForUserId(long userId)
    {
        List<Journal> rtnJournalList = new ArrayList<>();
        User verifiedUser = userService.findByUserId(userId);

        for (Journal j : verifiedUser.getJournals())
        {
            rtnJournalList.add(new Journal(j.getJournalId(), j.getTitle(), j.getTextBody(), j.getMood(), j.getUser()));
        }

        return rtnJournalList;
    }

    @Override
    public void deleteJournalById(long journalId)
    {
        journalRepository.deleteById(journalId);
    }
}
