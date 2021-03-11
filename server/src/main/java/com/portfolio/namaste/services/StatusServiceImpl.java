package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Status;
import com.portfolio.namaste.repositories.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

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

    @Override
    public Status findStatusById(long statusId)
    {
        Status rtnStatus = statusRepository.findById(statusId)
                .orElseThrow(() -> new EntityNotFoundException("Status with id " + statusId + " not found!"));

        return rtnStatus;
    }
}
