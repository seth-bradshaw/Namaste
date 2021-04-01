package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Task;
import com.portfolio.namaste.models.User;
import com.portfolio.namaste.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Service(value = "taskService")
public class TaskServiceImpl implements TaskService
{
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private StatusService statusService;


    @Override
    public Task save(Task task)
    {
        Task newTask = new Task();

        if (task.getTaskId() != 0)
        {
            findTaskById(task.getTaskId());
            newTask.setTaskId(task.getTaskId());
        }

        newTask.setTitle(task.getTitle());
        newTask.setDescription(task.getDescription());
        newTask.setSeverity(task.getSeverity());
        newTask.setStartDate(task.getStartDate());
        newTask.setEndDate(task.getEndDate());
        newTask.setStartTime(task.getStartTime());
        newTask.setEndTime(task.getEndTime());

        if (task.getStatus() != null)
        {
            statusService.findStatusById(task.getStatus().getStatusId());
            newTask.setStatus(task.getStatus());
        }

        //currently possible to remove user in put request if not passed.
        if (task.getUser() != null)
        {
            User user = userService.findByUserId(task.getUser().getUserId());
            newTask.setUser(user);
        }

        newTask = taskRepository.save(newTask);
        return newTask;
    }

    @Override
    public Task findTaskById(long taskId)
    {
        Task rtnTask = taskRepository.findById(taskId)
                .orElseThrow(() -> new EntityNotFoundException("Task with id " + taskId + " not found!"));

        return rtnTask;
    }

    @Override
    public List<Task> findAllTasks()
    {
        List<Task> rtnTaskList = new ArrayList<>();
        taskRepository.findAll().iterator().forEachRemaining(rtnTaskList::add);

        return rtnTaskList;
    }

    @Override
    public List<Task> findAllTasksForUserId(long userId)
    {
        List<Task> rtnTaskList = new ArrayList<>();
        User user = userService.findByUserId(userId);

        for (Task t : user.getTasks())
        {
            rtnTaskList.add(t);
        }

        return rtnTaskList;
    }

    @Override
    public void deleteTaskById(long taskId)
    {
        taskRepository.deleteById(taskId);
    }
}