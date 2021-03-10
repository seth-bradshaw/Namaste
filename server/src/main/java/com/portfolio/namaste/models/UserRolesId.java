package com.portfolio.namaste.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@Embeddable
public class UserRolesId implements Serializable
{
    //id of user
    private long user;

    //id of role
    private long role;

    public UserRolesId(long user, long role)
    {
        this.user = user;
        this.role = role;
    }
}