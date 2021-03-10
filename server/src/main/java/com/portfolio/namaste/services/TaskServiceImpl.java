package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Task;
import com.portfolio.namaste.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "taskService")
public class TaskServiceImpl implements TaskService
{
    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Task save(Task task)
    {
        Task rtnTask = taskRepository.save(task);

        return rtnTask;
    }
}