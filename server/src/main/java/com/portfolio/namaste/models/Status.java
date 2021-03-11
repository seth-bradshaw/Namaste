package com.portfolio.namaste.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "statuses")
public class Status
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long statusId;

    private String statusType;

    @OneToMany(mappedBy = "status", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties(value = "status", allowSetters = true)
    private List<Task> tasks = new ArrayList<>();
}
