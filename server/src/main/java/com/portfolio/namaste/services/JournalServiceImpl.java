package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Journal;
import com.portfolio.namaste.repositories.JournalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "journalService")
public class JournalServiceImpl implements JournalService
{
    @Autowired
    private JournalRepository journalRepository;

    @Override
    public Journal save(Journal journal)
    {
        return null;
    }

    @Override
    public Journal findJournalById(long journalId)
    {
        return null;
    }
}
