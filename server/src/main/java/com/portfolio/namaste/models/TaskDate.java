package com.portfolio.namaste.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "taskDates")
public class TaskDate
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long dateId;

    @NonNull
    private long year;

    @NonNull
    private long month;

    @NonNull
    private long day;

    @NonNull
    private long startTime;

    @NonNull
    private long endTime;

    @OneToOne
    @JsonIgnoreProperties(value = "taskDate")
    private Task task;
}
