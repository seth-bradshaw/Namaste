package com.portfolio.namaste.services;

import com.portfolio.namaste.models.MeditationSession;

import java.util.List;

public interface MeditationSessionService
{
    MeditationSession save(MeditationSession session);

    List<MeditationSession> findAllSessions();

    MeditationSession findSessionById(long sessionId);

    void deleteSessionById(long sessionId);
}
