package com.portfolio.namaste.controllers;

import com.portfolio.namaste.models.Status;
import com.portfolio.namaste.services.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/statuses")
public class StatusController
{
    @Autowired
    private StatusService statusService;

    @GetMapping(value = "/statuses", produces = "application/json")
    public ResponseEntity<?> getAllStatuses()
    {
        List<Status> statusList = statusService.findAllStatuses();

        return new ResponseEntity<>(statusList, HttpStatus.OK);
    }

    @GetMapping(value = "/status/{statusId}", produces = "application/json")
    public ResponseEntity<?> getStatusById(@PathVariable long statusId)
    {
        Status status = statusService.findStatusById(statusId);

        return new ResponseEntity<>(status, HttpStatus.OK);
    }

    @PostMapping(value = "/statuses", consumes = "application/json")
    public ResponseEntity<?> addNewStatus(@RequestBody @Valid Status newStatus) throws Exception
    {
        newStatus.setStatusId(0);
        Status addedStatus = statusService.save(newStatus);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "/status/{statusId}", consumes = "application/json")
    public ResponseEntity<?> editExistingStatusById(@PathVariable long statusId, @RequestBody @Valid Status editedStatus) throws Exception
    {
        editedStatus.setStatusId(statusId);
        Status updatedStatus = statusService.save(editedStatus);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/status/{statusId}")
    public ResponseEntity<?> deleteStatusById(@PathVariable long statusId)
    {
        statusService.deleteStatusById(statusId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
