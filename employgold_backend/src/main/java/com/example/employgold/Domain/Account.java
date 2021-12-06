package com.example.employgold.Domain;

import javax.persistence.*;

@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increase;
    private Integer id;

    @Column
    private String userType;
    private String accountEmail;
    private String accountPassword;
    @Column
    private Integer userId;


    public void setId(Integer id) {
        this.id = id;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public void setAccountEmail(String email) {
        this.accountEmail = email;
    }

    public void setAccountPassword(String password) {
        this.accountPassword = password;
    }

    public Integer getId() {
        return id;
    }

    public String getUserType() {
        return userType;
    }

    public String getAccountEmail() {
        return accountEmail;
    }

    public String getAccountPassword() {
        return accountPassword;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getUserId() {
        return userId;
    }
}
