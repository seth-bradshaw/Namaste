package com.portfolio.namaste.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "meditationSessions")
public class MeditationSession
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long meditationSessionId;

    private long sessionLength;

    @NonNull
    private String title;

    @NonNull
    private String description;

    @NonNull
    private String videoUrl;
}
