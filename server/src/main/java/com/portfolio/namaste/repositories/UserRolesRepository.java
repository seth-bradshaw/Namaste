package com.portfolio.namaste.repositories;

import com.portfolio.namaste.models.UserRoles;
import com.portfolio.namaste.models.UserRolesId;
import org.springframework.data.repository.CrudRepository;

public interface UserRolesRepository extends CrudRepository<UserRoles, UserRolesId>
{
}
