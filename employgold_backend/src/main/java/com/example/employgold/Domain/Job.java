package com.example.employgold.Domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Job {
    @Id
    private Integer id;
    @Column
    private String companyName;
    @Column
    private String title;
    @Column
    private String description;
    @Column
    private String applyLink;

    public void setId(Integer id) {
        this.id = id;
    }

    @Id
    public Integer getId() {
        return id;
    }
}
