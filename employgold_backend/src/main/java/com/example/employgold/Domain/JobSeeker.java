package com.example.employgold.Domain;

import javax.persistence.*;

@Entity
public class JobSeeker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increase;
    private Integer id;

    @Column
    private String nameTitle;
    @Column
    private String legalFirstName;
    @Column
    private String middleName;
    @Column
    private String legalLastName;
    @Column
    private String pronouns;
    @Column
    private String primaryEmail;
    @Column
    private String alternateEmail;
    @Column
    private String cellPhone;
    @Column
    private String homePhone;
    @Column
    private String addressFirstLine;
    @Column
    private String addressSecondLine;
    @Column
    private String city;
    @Column
    private String state;
    @Column
    private String country;
    @Column
    private String zipCode;


    public void setId(Integer id) {
        this.id = id;
    }


    public Integer getId() {
        return id;
    }

    public String getNameTitle() {
        return nameTitle;
    }

    public String getAddressFirstLine() {
        return addressFirstLine;
    }

    public String getAddressSecondLine() {
        return addressSecondLine;
    }

    public String getAlternateEmail() {
        return alternateEmail;
    }

    public String getCellPhone() {
        return cellPhone;
    }

    public String getCity() {
        return city;
    }

    public String getCountry() {
        return country;
    }

    public String getHomePhone() {
        return homePhone;
    }

    public String getLegalFirstName() {
        return legalFirstName;
    }

    public String getLegalLastName() {
        return legalLastName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public String getPrimaryEmail() {
        return primaryEmail;
    }

    public String getPronouns() {
        return pronouns;
    }

    public String getState() {
        return state;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setAddressFirstLine(String addressFirstLine) {
        this.addressFirstLine = addressFirstLine;
    }

    public void setAddressSecondLine(String addressSecondLine) {
        this.addressSecondLine = addressSecondLine;
    }

    public void setAlternateEmail(String alternateEmail) {
        this.alternateEmail = alternateEmail;
    }

    public void setCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setHomePhone(String homePhone) {
        this.homePhone = homePhone;
    }

    public void setLegalFirstName(String legalFirstName) {
        this.legalFirstName = legalFirstName;
    }

    public void setLegalLastName(String legalLastName) {
        this.legalLastName = legalLastName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public void setPrimaryEmail(String primaryEmail) {
        this.primaryEmail = primaryEmail;
    }

    public void setPronouns(String pronouns) {
        this.pronouns = pronouns;
    }

    public void setState(String state) {
        this.state = state;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public void setNameTitle(String nameTitle) {
        this.nameTitle = nameTitle;
    }

}
