package com.portfolio.namaste.repositories;

import com.portfolio.namaste.models.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long>
{

}
