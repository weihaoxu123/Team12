package com.example.employgold.Domain;

import javax.persistence.*;

@Entity
@Table(name = "learn_style_assessment")
public class LearnStyleAssessment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increase;
    private Integer id;
    @Column
    private String visual;
    @Column
    private String aural;
    @Column
    private String readWrite;
    @Column
    private String kinesthetic;
    @Column
    private String learningPreference;
    @Column
    private Integer jobSeekerId;

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public String getAural() {
        return aural;
    }

    public String getKinesthetic() {
        return kinesthetic;
    }

    public String getLearningPreference() {
        return learningPreference;
    }

    public void setAural(String aural) {
        this.aural = aural;
    }

    public void setKinesthetic(String kinesthetic) {
        this.kinesthetic = kinesthetic;
    }

    public void setLearningPreference(String learningPreference) {
        this.learningPreference = learningPreference;
    }

    public void setReadWrite(String readWrite) {
        this.readWrite = readWrite;
    }

    public void setVisual(String visual) {
        this.visual = visual;
    }

    public void setJobSeekerId(Integer jobSeekerId) {
        this.jobSeekerId = jobSeekerId;
    }
}
