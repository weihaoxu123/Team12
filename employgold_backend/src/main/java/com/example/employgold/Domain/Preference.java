package com.example.employgold.Domain;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Preference {
    @Id
    private Integer id;

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }
}
