package com.portfolio.namaste;

import com.portfolio.namaste.models.*;
import com.portfolio.namaste.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;

@Component
@Transactional
@ConditionalOnProperty(prefix = "command.line.runner", value = "enabled", havingValue = "true", matchIfMissing = true)
public class SeedData implements CommandLineRunner
{
    @Autowired
    private RoleService roleService;

    @Autowired
    private UserService userService;

    @Autowired
    private JournalService journalService;

    @Autowired
    private StatusService statusService;

    @Autowired
    private TaskService taskService;

    @Autowired
    private UserRolesService userRolesService;

    @Autowired
    private TaskStatusesService taskStatusesService;

    @Transactional
    @Override public void run(String... args) throws Exception
    {
        Role r1 = new Role("ADMIN");
        r1 = roleService.save(r1);

        Role r2 = new Role("USER");
        r2 = roleService.save(r2);

        Role r3 = new Role("DATA");
        r3 = roleService.save(r3);

        User u1 = new User();
        u1.setUsername("admin");
        u1.setPassword("password");
        u1.setEmail("admin@example.com");
        u1.getRoles().clear();
        u1.getRoles().add(new UserRoles(u1, r1));
        u1.getRoles().add(new UserRoles(u1, r2));
        u1.getRoles().add(new UserRoles(u1, r3));
        u1 = userService.save(u1);

        User u2 = new User();
        u2.setUsername("user1");
        u2.setPassword("password");
        u2.setEmail("user1@example.com");
        u2.getRoles().clear();
        u2.getRoles().add(new UserRoles(u2, r2));
        u2 = userService.save(u2);

        User u3 = new User();
        u3.setUsername("datauser");
        u3.setPassword("password");
        u3.setEmail("datauser@example.com");
        u3.getRoles().clear();
        u3.getRoles().add(new UserRoles(u3, r2));
        u3.getRoles().add(new UserRoles(u3, r3));
        u3 = userService.save(u3);

        Task t1 = new Task();
        t1.setTitle("THIS IS TICKET 1");
        t1.setDescription("I encountered my first error!");
        t1.setSeverity("uno");
        t1.setUser(u2);
        t1 = taskService.save(t1);

        Task t2 = new Task();
        t2.setTitle("THIS IS TICKET 2");
        t2.setDescription("I encountered my first error!");
        t2.setSeverity("uno");
        t2 = taskService.save(t2);
        t1.setUser(u2);

        Task t3 = new Task();
        t3.setTitle("THIS IS TICKET 3");
        t3.setDescription("I encountered my first error!");
        t3.setSeverity("uno");
        t3 = taskService.save(t3);
        t3.setUser(u1);

        Status s1 = new Status();
        s1.setStatusType("Not Started");

        Status s2 = new Status();
        s2.setStatusType("In Progress");
        s2 = statusService.save(s2);

        Status s3 = new Status();
        s3.setStatusType("Completed");
        s3 = statusService.save(s3);

        t1 = taskService.save(t1);
        t2 = taskService.save(t2);
        t3 = taskService.save(t3);
//        u1.getTickets().add(new UserTickets(u1, t3));
//        u3.getTickets().add(new UserTickets(u3, t3));
    }
}
