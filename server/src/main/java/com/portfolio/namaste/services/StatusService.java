package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Status;

import java.util.List;

public interface StatusService
{
    Status save(Status status) throws Exception;

    Status findStatusById(long statusId);

    List<Status> findAllStatuses();

    void deleteStatusById(long statusId);
}
