package com.example.employgold.Domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Time;

@Entity
public class WorkExperience {
    @Id
    private Integer recordId;

    @Column
    private Integer jobSeekerId;
    @Column
    private String companyName;
    @Column
    private String country;
    @Column
    private String positionName;
    @Column
    private String city;
    @Column
    private String state;
    @Column
    private String type;
    @Column
    private Boolean currentlyEnrolled;
}
