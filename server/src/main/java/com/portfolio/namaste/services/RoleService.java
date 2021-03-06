package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Role;

public interface RoleService
{
    Role save(Role role);

    Role findRoleById(long roleId);

    Role findByRoleType(String roleType);
}
