package com.portfolio.namaste.services;

import com.portfolio.namaste.models.*;
import com.portfolio.namaste.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Service(value = "userService")
public class UserServiceImpl implements UserService
{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleService roleService;

    @Autowired
    private TaskService taskService;

    @Autowired
    private JournalService journalService;

    @Override
    public User findUserByUsername(String username)
    {
        User user = userRepository.findByUsername(username);
        return user;
    }

    @Override
    public User save(User user)
    {
        User newUser = new User();

        if (user.getUserId() != 0)
        {
            findByUserId(user.getUserId());
            newUser.setUserId(user.getUserId());
        }

        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setEmail(user.getEmail());
        newUser.setUsername(user.getUsername());
        newUser.setPassword(user.getPassword());

        newUser.getRoles().clear();
        for (UserRoles ur : user.getRoles())
        {
            Role addRole = roleService.findRoleById(ur.getRole().getRoleId());

            newUser.getRoles()
                    .add(new UserRoles(newUser, addRole));
        }

        newUser.getTasks().clear();
        for (Task t : user.getTasks())
        {
            Task addTask = taskService.findTaskById(t.getTaskId());

            newUser.getTasks()
                    .add(new Task(addTask.getTaskId(), addTask.getTitle(), addTask.getDescription(), addTask.getSeverity(), newUser, addTask.getStatus()));
        }

        newUser.getJournals().clear();
        for (Journal j : user.getJournals())
        {
            Journal addJournal = journalService.findJournalById(j.getJournalId());

            newUser.getJournals()
                    .add(new Journal(addJournal.getJournalId(), addJournal.getTitle(), addJournal.getTextBody(), addJournal.getMood(), addJournal.getUser()));
        }

        return userRepository.save(newUser);
    }

    @Override
    public List<User> findAllUsers()
    {
        List<User> rtnList = new ArrayList<>();
        userRepository.findAll().iterator().forEachRemaining(rtnList::add);

        return rtnList;
    }

    @Override
    public User findByUserId(long userId)
    {
        User rtnUser = new User();
        rtnUser = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User with id " + userId + " not found!"));

        return rtnUser;
    }

    @Override
    public void deleteUserById(long userId)
    {
        userRepository.deleteById(userId);
    }

    @Override
    public void deleteAllUsers()
    {
        userRepository.deleteAll();
    }
}
