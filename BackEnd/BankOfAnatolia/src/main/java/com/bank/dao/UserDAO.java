package com.bank.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserDAO {
    private Long userId;
    private String username;
    private String password;
    private String firstname;
    private String lastname;
    private String email;
    private Boolean isAdmin;

}
