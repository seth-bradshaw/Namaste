package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Task;
import com.portfolio.namaste.models.TaskDate;

import java.util.List;

public interface TaskDateService
{
    TaskDate findDateById(long dateId);

    TaskDate save(TaskDate date);

    void deleteDateById(long dateId);

}
