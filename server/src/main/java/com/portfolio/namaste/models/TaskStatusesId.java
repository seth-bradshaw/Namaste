package com.portfolio.namaste.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@Embeddable
public class TaskStatusesId implements Serializable
{

    private long task;

    private long status;

    public TaskStatusesId(long task, long status)
    {
        this.task = task;
        this.status = status;
    }
}
