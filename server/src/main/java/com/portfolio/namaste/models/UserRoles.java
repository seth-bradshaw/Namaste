package com.portfolio.namaste.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "userroles")
@IdClass(UserRolesId.class)
public class UserRoles implements Serializable
{
    //half the primary key for userroles. Foreign key into the user table.
    @Id
    @ManyToOne
    @NotNull
    @NonNull
    @JoinColumn(name = "userId")
    @JsonIgnoreProperties(value = "roles", allowSetters = true)
    private User user;

    //half the primary key for userroles. Foreign key into the user table.
    @Id
    @ManyToOne
    @NotNull
    @NonNull
    @JoinColumn(name = "roleId")
    @JsonIgnoreProperties(value = "users", allowSetters = true)
    private Role role;
}
