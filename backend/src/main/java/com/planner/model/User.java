package com.planner.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(unique = true)
    @NotNull
    private String username;

    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    @NotNull
    private String email;
    @NotNull
    private String mobile;

    private String country;
    private String city;
    private String address;
    private String postalCode;

    @NotNull
    private String password;

    public @NotNull String getUsername() {
        return username;
    }

    public @NotNull String getFirstName() {
        return firstName;
    }

    public @NotNull String getLastName() {
        return lastName;
    }

    public @NotNull String getEmail() {
        return email;
    }

    public @NotNull String getMobile() {
        return mobile;
    }

    public String getCountry() {
        return country;
    }

    public String getCity() {
        return city;
    }

    public String getAddress() {
        return address;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public @NotNull String getPassword() {
        return password;
    }

    public void setUsername(@NotNull String username) {
        this.username = username;
    }

    public void setFirstName(@NotNull String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(@NotNull String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(@NotNull String email) {
        this.email = email;
    }

    public void setMobile(@NotNull String mobile) {
        this.mobile = mobile;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public void setPassword(@NotNull String password) {
        this.password = password;
    }

}