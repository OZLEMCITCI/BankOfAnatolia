package com.bank.dao;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDAO {
    private Long userId;
    private String username;

    @JsonIgnore
    private String password;
    private String firstname;
    private String lastname;
    private String email;
    private Boolean isAdmin;

}
