package com.portfolio.namaste.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;
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
    @NotNull
    private long title;

    @NonNull
    @NotNull
    private long description;

    @NonNull
    @NotNull
    private long videoUrl;
}
