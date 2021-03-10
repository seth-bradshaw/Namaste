package com.portfolio.namaste.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * The type Login credentials.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginCredentials
{
    private String userName;
    private String password;
}