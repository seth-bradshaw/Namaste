package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Journal;

public interface JournalService
{
    Journal save(Journal journal);

    Journal findJournalById(long journalId);
}
