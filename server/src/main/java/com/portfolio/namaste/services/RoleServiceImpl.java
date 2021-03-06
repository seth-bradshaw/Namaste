package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Role;
import com.portfolio.namaste.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

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

    @Override
    public Role findRoleById(long roleId)
    {
        Role rtnRole = roleRepository.findById(roleId)
                .orElseThrow(() -> new EntityNotFoundException("Role with id " + roleId + " not found!"));

        return rtnRole;
    }

    @Override
    public Role findByRoleType(String roleType)
    {
        Role rtnRole = roleRepository.findRoleByRoleType(roleType);

        return rtnRole;
    }
}
