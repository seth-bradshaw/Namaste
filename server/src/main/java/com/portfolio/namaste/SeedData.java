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
        u1.setFirstName("Admin");
        u1.setLastName("Istrator");
        u1.setUsername("admin");
        u1.setPasswordEncrypt("password");
        u1.setEmail("admin@example.com");
        u1.getRoles().clear();
        u1.getRoles().add(new UserRoles(u1, r1));
        u1.getRoles().add(new UserRoles(u1, r2));
        u1.getRoles().add(new UserRoles(u1, r3));
        u1 = userService.save(u1);

        User u2 = new User();
        u2.setFirstName("Seth");
        u2.setLastName("Bradshaw");
        u2.setUsername("sethbrad");
        u2.setPasswordEncrypt("password");
        u2.setEmail("sethbradshaw@example.com");
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
        t1.setTitle("Chris's birthday party");
        t1.setDescription("The party is at his house. Bring cake and icecream, as well as a gift.");
        t1.setSeverity("low");
        t1.setUser(u2);
        t1.setStartDate("03-29-2021");
        t1.setEndDate("03-29-2021");
        t1.setStartTime("12");
        t1.setEndTime("15");
        t1 = taskService.save(t1);

        Task t2 = new Task();
        t2.setTitle("Web Development Seminar");
        t2.setDescription("Get ready to learn a lot. Study some of the concepts beforehand.");
        t2.setSeverity("medium");
        t2.setUser(u2);
        t2.setStartDate("03-30-2021");
        t2.setEndDate("03-30-2021");
        t2.setStartTime("8");
        t2.setEndTime("17");
        t2 = taskService.save(t2);

        Task t3 = new Task();
        t3.setTitle("Dentist Appointment");
        t3.setDescription("Just a normal check up. Please don't have any cavities!!");
        t3.setSeverity("uno");
        t3.setUser(u2);
        t3.setStartDate("04-05-2021");
        t3.setEndDate("04-05-2021");
        t3.setStartTime("13");
        t3.setEndTime("14");
        t3 = taskService.save(t3);

        Task t4 = new Task();
        t4.setTitle("Kaela's soccer tournament");
        t4.setDescription("The tournament is located at 1234 N Main St, City. Bring snacks for the team post game.");
        t4.setSeverity("uno");
        t4.setUser(u2);
        t4.setStartDate("04-05-2021");
        t4.setEndDate("04-06-2021");
        t4.setStartTime("10");
        t4.setEndTime("17");
        t4 = taskService.save(t4);

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
