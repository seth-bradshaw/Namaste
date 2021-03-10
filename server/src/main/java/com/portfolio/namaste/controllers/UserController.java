package com.portfolio.namaste.controllers;

import com.portfolio.namaste.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/users")
public class UserController
{
    @Autowired
    private UserService userService;


}
