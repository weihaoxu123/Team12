package com.example.employgold.Domain;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Preference {

    private Integer id;

    public void setId(Integer id) {
        this.id = id;
    }

    @Id
    public Integer getId() {
        return id;
    }
}
