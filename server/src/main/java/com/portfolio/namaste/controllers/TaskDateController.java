package com.portfolio.namaste.controllers;

import com.portfolio.namaste.models.Task;
import com.portfolio.namaste.models.TaskDate;
import com.portfolio.namaste.services.TaskDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/dates")
public class TaskDateController
{
    @Autowired
    private TaskDateService dateService;

    @GetMapping(value = "/date/{dateId}", produces = "application/json")
    public ResponseEntity<?> findDateById(@PathVariable long dateId)
    {
        TaskDate date = dateService.findDateById(dateId);

        return new ResponseEntity<>(date, HttpStatus.OK);
    }

    @PostMapping(value = "/dates", consumes = "application/json")
    public ResponseEntity<?> addNewDate(@RequestBody @Valid TaskDate newDate)
    {
        newDate.setDateId(0);
        TaskDate date = dateService.save(newDate);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(value = "/date/{dateId}", consumes = "application/json")
    public ResponseEntity<?> editExistingDate(@RequestBody @Valid TaskDate editedDate, @PathVariable long dateId)
    {
        editedDate.setDateId(dateId);
        TaskDate date = dateService.save(editedDate);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/date/{dateId}", produces = "application/json")
    public ResponseEntity<?> deleteDateById(@PathVariable long dateId)
    {
        dateService.deleteDateById(dateId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}