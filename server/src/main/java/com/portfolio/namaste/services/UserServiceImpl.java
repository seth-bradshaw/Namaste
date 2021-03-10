package com.portfolio.namaste.services;

import com.portfolio.namaste.models.User;
import com.portfolio.namaste.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "userService")
public class UserServiceImpl implements UserService
{
    @Autowired
    private UserRepository userRepository;


    @Override
    public User findUserByUsername(String username)
    {
        User user = userRepository.findByUsername(username);
        return user;
    }

    @Override
    public User save(User u1)
    {
        User user = userRepository.save(u1);

        return user;
    }
}
