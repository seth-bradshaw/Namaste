package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Role;
import com.portfolio.namaste.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "roleService")
public class RoleServiceImpl implements RoleService
{
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public Role save(Role role)
    {
        Role rtnRole = roleRepository.save(role);

        return rtnRole;
    }
}
