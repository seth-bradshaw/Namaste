package com.portfolio.namaste.repositories;

import com.portfolio.namaste.models.TaskStatuses;
import com.portfolio.namaste.models.TaskStatusesId;
import org.springframework.data.repository.CrudRepository;

public interface TaskStatusesRepository extends CrudRepository<TaskStatuses, TaskStatusesId>
{
}
