package com.bank.payload.request;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Getter
@Setter
@Data
public class SignUpForm {

    @NotBlank
    @Size(max=50)
    private String firstName;

    @NotBlank
    @Size(max=50)
    private String lastName;

    @NotBlank
    @Size(max=50)
    private String username;

    @NotBlank
    @Size(min=4, max=50)
    private String password;

    @NotBlank
    @Email(message="Please provide a valid email address")
    @Size(max=50)
    private String email;



    private Set<String> role;



}
