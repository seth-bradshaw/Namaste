package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Status;

public interface StatusService
{
    Status save(Status status);

    Status findStatusById(long statusId);
}
