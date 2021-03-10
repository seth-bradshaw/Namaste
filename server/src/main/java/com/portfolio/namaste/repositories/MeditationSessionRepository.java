package com.portfolio.namaste.repositories;

import com.portfolio.namaste.models.MeditationSession;
import org.springframework.data.repository.CrudRepository;

public interface MeditationSessionRepository extends CrudRepository<MeditationSession, Long>
{
}
