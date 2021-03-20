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
    private MeditationSessionService meditationSessionService;

    @Autowired
    private UserRolesService userRolesService;

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
        u1.setFirstName("user1");
        u1.setLastName("last");
        u1.setUsername("admin");
        u1.setPasswordEncrypt("password");
        u1.setEmail("admin@example.com");
        u1.getRoles().clear();
        u1.getRoles().add(new UserRoles(u1, r1));
        u1.getRoles().add(new UserRoles(u1, r2));
        u1.getRoles().add(new UserRoles(u1, r3));
        u1 = userService.save(u1);

        User u2 = new User();
        u2.setFirstName("user2");
        u2.setLastName("last");
        u2.setUsername("user2");
        u2.setPasswordEncrypt("password");
        u2.setEmail("user1@example.com");
        u2.getRoles().clear();
        u2.getRoles().add(new UserRoles(u2, r2));
        u2 = userService.save(u2);

        User u3 = new User();
        u3.setFirstName("user3");
        u3.setLastName("last");
        u3.setUsername("datauser");
        u3.setPasswordEncrypt("password");
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
        t2.setUser(u2);
        t2 = taskService.save(t2);

        Task t3 = new Task();
        t3.setTitle("THIS IS TICKET 3");
        t3.setDescription("I encountered my first error!");
        t3.setSeverity("uno");
        t3.setUser(u1);
        t3 = taskService.save(t3);


        Status s1 = new Status();
        s1.setStatusType("Not Started");
        s1 = statusService.save(s1);
        t1.setStatus(s1);
        t3.setStatus(s1);

        Status s2 = new Status();
        s2.setStatusType("In Progress");
        s2 = statusService.save(s2);
        t2.setStatus(s2);

        Status s3 = new Status();
        s3.setStatusType("Completed");
        s3 = statusService.save(s3);

        MeditationSession ms1 = new MeditationSession();
        ms1.setSessionLength(5);
        ms1.setTitle("Testing adding new session");
        ms1.setDescription("testing");
        ms1.setVideoUrl("testurl");
        ms1 = meditationSessionService.save(ms1);

        Journal j1 = new Journal();
        j1.setTitle("Testing Journal Title");
        j1.setTextBody("This is the body of the entry");
        j1.setMood("happy");
        j1.setUser(u2);
        j1 = journalService.save(j1);

        Journal j2 = new Journal();
        j2.setTitle("Testing Journal Title");
        j2.setTextBody("This is the body of the entry");
        j2.setMood("happy");
        j2.setUser(u2);
        j2 = journalService.save(j2);

        Journal j3 = new Journal();
        j3.setTitle("Testing Journal Title");
        j3.setTextBody("This is the body of the entry");
        j3.setMood("happy");
        j3.setUser(u2);
        j3 = journalService.save(j3);

        Journal j4 = new Journal();
        j4.setTitle("Testing Journal Title");
        j4.setTextBody("This is the body of the entry");
        j4.setMood("happy");
        j4.setUser(u2);
        j4 = journalService.save(j4);

        Journal j5 = new Journal();
        j5.setTitle("Testing Journal Title");
        j5.setTextBody("This is the body of the entry");
        j5.setMood("happy");
        j5.setUser(u2);
        j5 = journalService.save(j5);

        Journal j6 = new Journal();
        j6.setTitle("Testing Journal Title");
        j6.setTextBody("This is the body of the entry");
        j6.setMood("happy");
        j6.setUser(u1);
        j6 = journalService.save(j6);
    }
}
