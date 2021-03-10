package com.portfolio.namaste.repositories;

import com.portfolio.namaste.models.Journal;
import org.springframework.data.repository.CrudRepository;

public interface JournalRepository extends CrudRepository<Journal, Long>
{
}
