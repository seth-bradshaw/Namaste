package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Task;

import java.util.List;

public interface TaskService
{
    Task save(Task t1);

    Task findTaskById(long taskId);

    List<Task> findAllTasks();

    List<Task> findAllTasksForUserId(long userId);

    void deleteTaskById(long taskId);
}
