package com.example.employgold.Domain;
import javax.persistence.*;

@Entity
public class JobSeeker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increase;
    private Integer id;

    @Column
    private String name;


    public void setId(Integer id) {
        this.id = id;
    }
    public void setName(String name) {
        this.name = name;
    }

    @Id
    public Integer getId() {
        return id;
    }
}
