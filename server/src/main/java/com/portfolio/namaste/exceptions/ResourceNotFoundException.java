package com.portfolio.namaste.exceptions;

public class ResourceNotFoundException
        extends RuntimeException
{
    public ResourceNotFoundException(String message)
    {
        super("Error from Bug Tracker Application " + message);
    }
}
