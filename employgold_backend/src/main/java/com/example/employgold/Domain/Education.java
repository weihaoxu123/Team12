package com.example.employgold.Domain;

import javax.persistence.*;
import java.sql.Time;

@Entity
@IdClass(EducationId.class)//组合主键类
@Table(name = "education")
public class Education {
    @Id
    @Column(nullable = false)
    private Integer jobSeekerId;

    @Id
    @Column(nullable = false)
    private String degree;
    @Column
    private String city;
    @Column
    private String state;
    @Column
    private String country;
    @Column
    private String major;
    @Column
    private String minor;
    @Column
    private Time startDate;
    @Column
    private Time endDate;

    public void setId(Integer id) {
        this.jobSeekerId = id;
    }

    public Integer getId() {
        return jobSeekerId;
    }

    public String getDegree() {
        return degree;
    }
}
