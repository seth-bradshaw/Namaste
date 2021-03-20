package com.portfolio.namaste.repositories;

import com.portfolio.namaste.models.Role;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface RoleRepository extends CrudRepository<Role, Long>
{
    @Query(value = "SELECT r.role_id, r.role_type FROM roles r WHERE r.role_type = ?1", nativeQuery = true)
    Role findRoleByRoleType(String roleType);
}
