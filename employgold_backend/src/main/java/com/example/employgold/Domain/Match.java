package com.example.employgold.Domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@IdClass(MatchId.class)
public class Match implements Serializable{
    @Id
    private Integer jobSeekerId;
    @Id
    private Integer jobId;
    @Column
    private String score;
    @Column
    private Integer employerId;

    public Integer getJobId() {
        return jobId;
    }
    public Integer getJobSeekerId() {
        return jobSeekerId;
    }

    public Integer getEmployerId() {
        return employerId;
    }

    public String getScore() {
        return score;
    }
}
@Data
@AllArgsConstructor
class MatchId implements Serializable{
    private Integer jobSeekerId;
    private Integer jobId;
}
