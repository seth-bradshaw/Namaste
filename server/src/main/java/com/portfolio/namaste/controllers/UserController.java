package com.portfolio.namaste.controllers;

import com.portfolio.namaste.models.User;
import com.portfolio.namaste.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserController
{
    @Autowired
    private UserService userService;

    @GetMapping(value = "/users", produces = "application/json")
    public ResponseEntity<?> getAllUsers()
    {
        List<User> userList = userService.findAllUsers();

        return new ResponseEntity<>(userList, HttpStatus.OK);
    }

    @GetMapping(value = "/user/{userId}", produces = "application/json")
    public ResponseEntity<?> getUserById(@PathVariable long userId)
    {
        User user = userService.findByUserId(userId);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping(value = "/user/{userId}", consumes = "application/json")
    public ResponseEntity<?> editExistingUserById(@PathVariable long userId, @RequestBody @Valid User editedUser)
    {
        editedUser.setUserId(userId);
        User user = userService.save(editedUser);

        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @DeleteMapping(value = "/user/{userId}")
    public ResponseEntity<?> deleteExistingUserById(@PathVariable long userId)
    {
        userService.deleteUserById(userId);

        return new ResponseEntity<>(HttpStatus.GONE);
    }
}
