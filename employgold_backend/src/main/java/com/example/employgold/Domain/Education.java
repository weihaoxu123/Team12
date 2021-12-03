package com.example.employgold.Domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.sql.Time;

@Entity
@IdClass(EducationId.class)//组合主键类
public class Education {
    @Id
    private Integer jobSeekerId;

    @Id
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

    @Id
    public Integer getId() {
        return jobSeekerId;
    }

    public String getDegree() {
        return degree;
    }
}
