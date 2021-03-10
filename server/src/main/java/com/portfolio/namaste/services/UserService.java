package com.portfolio.namaste.services;

import com.portfolio.namaste.models.User;
import com.portfolio.namaste.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public interface UserService
{
   public User findUserByUsername(String username);

    User save(User user);
}
