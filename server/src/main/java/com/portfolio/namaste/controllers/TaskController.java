package com.portfolio.namaste.controllers;

import com.portfolio.namaste.models.Task;
import com.portfolio.namaste.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/tasks")
public class TaskController
{
    @Autowired
    private TaskService taskService;

    @GetMapping(value = "/tasks", produces = "application/json")
    public ResponseEntity<?> getAllTasks()
    {
        List<Task> taskList = taskService.findAllTasks();

        return new ResponseEntity<>(taskList, HttpStatus.OK);
    }

    @GetMapping(value = "/user/{userId}", produces = "application/json")
    public ResponseEntity<?> getAllTasksForUserId(@PathVariable long userId)
    {
        List<Task> taskList = taskService.findAllTasksForUserId(userId);

        return new ResponseEntity<>(taskList, HttpStatus.OK);
    }

    @GetMapping(value = "/task/{taskId}", produces = "application/json")
    public ResponseEntity<?> getTaskById(@PathVariable long taskId)
    {
        Task task = taskService.findTaskById(taskId);

        return new ResponseEntity<>(task, HttpStatus.OK);
    }

    @PostMapping(value = "/tasks", consumes = "application/json")
    public ResponseEntity<?> addNewTask(@RequestBody @Valid Task newTask)
    {
        newTask.setTaskId(0);
        Task addedTask = taskService.save(newTask);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "/task/{taskId}", consumes = "application/json")
    public ResponseEntity<?> editExistingTaskById(@PathVariable long taskId, @RequestBody @Valid Task editedTask)
    {
        editedTask.setTaskId(taskId);
        Task updatedTask = taskService.save(editedTask);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/task/{taskId}")
    public ResponseEntity<?> deleteTaskById(@PathVariable long taskId)
    {
        taskService.deleteTaskById(taskId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
