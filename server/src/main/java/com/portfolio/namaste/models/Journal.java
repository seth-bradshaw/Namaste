package com.portfolio.namaste.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "journal")
public class Journal
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long journalId;

    private String title;

    private String textBody;

    private String mood;

    @ManyToOne
    @JsonIgnoreProperties(value = {"journal", "roles"}, allowSetters = true)
    private User user;
}
