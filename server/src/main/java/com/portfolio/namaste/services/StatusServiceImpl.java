package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Status;
import com.portfolio.namaste.models.Task;
import com.portfolio.namaste.repositories.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Service(value = "statusService")
public class StatusServiceImpl implements StatusService
{
    @Autowired
    private StatusRepository statusRepository;

    @Override
    public Status save(Status status) throws Exception
    {
        Status newStatus = new Status();

        if (status.getStatusId() != 0)
        {
            findStatusById(status.getStatusId());
            newStatus.setStatusId(status.getStatusId());
        }

        newStatus.setStatusType(status.getStatusType());

        if (status.getTasks().size() > 0)
        {
           throw new Exception("You cannot edit tasks through status");
        }

        return statusRepository.save(newStatus);
    }

    @Override
    public Status findStatusById(long statusId)
    {
        Status rtnStatus = statusRepository.findById(statusId)
                .orElseThrow(() -> new EntityNotFoundException("Status with id " + statusId + " not found!"));

        return rtnStatus;
    }

    @Override
    public List<Status> findAllStatuses()
    {
        List<Status> rtnStatusList = new ArrayList<>();
        statusRepository.findAll().iterator().forEachRemaining(rtnStatusList::add);

        return rtnStatusList;
    }

    @Override
    public void deleteStatusById(long statusId)
    {
        statusRepository.deleteById(statusId);
    }
}
