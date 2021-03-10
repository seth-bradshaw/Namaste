package com.portfolio.namaste.exceptions;

public class ResourceFoundException
        extends RuntimeException
{
    public ResourceFoundException(String message)
    {
        super("Error from Bug Tracker Application " + message);
    }
}
