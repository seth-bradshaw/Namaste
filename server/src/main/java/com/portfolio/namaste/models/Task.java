package com.portfolio.namaste.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tasks")
public class Task
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long taskId;

    private String title;

    private String description;

    private String severity;

    private String startDate;

    private String endDate;

    private String startTime;

    private String endTime;

    @ManyToOne
    @JsonIgnoreProperties(value = {"roles", "journals"}, allowSetters = true)
    private User user;

    @ManyToOne
    @JsonIgnoreProperties(value = "tasks", allowSetters = true)
    private Status status;

}
