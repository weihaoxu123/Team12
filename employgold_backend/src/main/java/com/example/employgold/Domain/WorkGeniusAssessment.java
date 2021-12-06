package com.example.employgold.Domain;

import javax.persistence.*;

@Entity
public class WorkGeniusAssessment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increase;
    private Integer id;
    @Column
    private String genius;
    @Column
    private String competency;
    @Column
    private String frustration;
    @Column
    private String skills;
    @Column
    private Integer jobSeekerId;

    public Integer getId() {
        return id;
    }

    public String getCompetency() {
        return competency;
    }

    public String getFrustration() {
        return frustration;
    }

    public String getGenius() {
        return genius;
    }

    public String getSkills() {
        return skills;
    }

    public void setCompetency(String competency) {
        this.competency = competency;
    }

    public void setFrustration(String frustration) {
        this.frustration = frustration;
    }

    public void setGenius(String genius) {
        this.genius = genius;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public void setJobSeekerId(Integer jobSeekerId) {
        this.jobSeekerId = jobSeekerId;
    }
}
