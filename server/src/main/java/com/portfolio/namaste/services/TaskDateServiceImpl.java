package com.portfolio.namaste.services;

import com.portfolio.namaste.models.Task;
import com.portfolio.namaste.models.TaskDate;
import com.portfolio.namaste.repositories.TaskDateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Service(value = "dateService")
public class TaskDateServiceImpl implements TaskDateService
{
    @Autowired
    private TaskDateRepository taskDateRepository;

    @Autowired
    private TaskService taskService;

    @Override
    public TaskDate findDateById(long dateId){
        return taskDateRepository.findById(dateId)
                .orElseThrow(() -> new EntityNotFoundException("Date with id " + dateId + " not found!"));
    }

    @Override
    public TaskDate save(TaskDate date){
        TaskDate newDate = new TaskDate();

        if (date.getDateId() != 0) {
            findDateById(date.getDateId());
            newDate.setDateId(date.getDateId());
        }

        newDate.setYear(date.getYear());
        newDate.setMonth(date.getMonth());
        newDate.setDay(date.getDay());
        newDate.setStartTime(date.getStartTime());
        newDate.setEndTime(date.getEndTime());

        if (date.getTask() != null)
        {

                taskService.findTaskById(date.getTask().getTaskId());
                newDate.setTask(date.getTask());
        }

       return taskDateRepository.save(newDate);
    }

    @Override
    public void deleteDateById(long dateId)
    {
        taskDateRepository.deleteById(dateId);
    }
}
