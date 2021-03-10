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
@Table(name = "taskstatuses")
@IdClass(TaskStatusesId.class)
public class TaskStatuses implements Serializable
{
    @Id
    @ManyToOne
    @NotNull
    @NonNull
    @JoinColumn(name = "taskId")
    @JsonIgnoreProperties(value = "statuses", allowSetters = true)
    private Task task;

    @Id
    @ManyToOne
    @NotNull
    @NonNull
    @JoinColumn(name = "statusId")
    @JsonIgnoreProperties(value = "tasks", allowSetters = true)
    private Status status;
}
