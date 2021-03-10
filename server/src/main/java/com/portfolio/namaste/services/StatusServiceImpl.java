package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Status;
import com.portfolio.namaste.repositories.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "statusService")
public class StatusServiceImpl implements StatusService
{
    @Autowired
    private StatusRepository statusRepository;

    @Override
    public Status save(Status status)
    {
        Status rtnStatus = statusRepository.save(status);

        return rtnStatus;
    }
}
