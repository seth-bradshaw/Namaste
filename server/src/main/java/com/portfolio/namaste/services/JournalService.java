package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Journal;

import java.util.List;

public interface JournalService
{
    Journal save(Journal journal);

    Journal findJournalById(long journalId);

    List<Journal> findAllJournals();

    List<Journal> findAllJournalsForUserId(long userId);

    void deleteJournalById(long journalId);
}
