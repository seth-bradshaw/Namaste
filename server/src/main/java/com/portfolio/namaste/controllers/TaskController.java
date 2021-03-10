package com.portfolio.namaste.controllers;

import com.portfolio.namaste.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "tasks")
public class TaskController
{
    @Autowired
    private TaskService taskService;


}
