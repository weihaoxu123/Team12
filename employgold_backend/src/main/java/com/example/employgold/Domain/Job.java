package com.example.employgold.Domain;

import javax.persistence.*;

@Entity
@Table(name = "job")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increase;
    private Integer id;
    @Column
    private String companyName;
    @Column
    private String title;
    @Column
    private String description;
    @Column
    private String applyLink;
    @Column
    private String type;
    @Column
    private Integer employerId;


    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public void setApplyLink(String applyLink) {
        this.applyLink = applyLink;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setEmployerId(Integer employerId) {
        this.employerId = employerId;
    }
}
