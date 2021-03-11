package com.portfolio.namaste.services;

import com.portfolio.namaste.models.User;
import com.portfolio.namaste.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface UserService
{
   public User findUserByUsername(String username);

    User save(User user);

    List<User> findAllUsers();

    User findByUserId(long userId);

    void deleteUserById(long userId);

    void deleteAllUsers();
}
