package com.portfolio.namaste.repositories;

import com.portfolio.namaste.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long>
{
    User findByUsername(String username);
}
