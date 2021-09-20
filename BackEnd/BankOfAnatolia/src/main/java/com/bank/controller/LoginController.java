package com.bank.controller;

import com.bank.model.Role;
import com.bank.model.User;
import com.bank.model.UserRole;
import com.bank.payload.request.SignUpForm;
import com.bank.payload.response.Response;
import com.bank.repository.RoleRepo;
import com.bank.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("auth")
public class LoginController {

    @Autowired
    UserRepo userrepo;

    @Autowired
    RoleRepo rolerepo;

    @Autowired
    PasswordEncoder encoder;



    @PostMapping("/register")
    public ResponseEntity<Response> registerUser(@RequestBody SignUpForm signUpForm){

        //Response object
      Response response =new Response();

      //Check the email and username in the signupForm
      if(userrepo.existsByUsername(signUpForm.getUsername())){
          response.setMessage("Error:Username is already taken");
          response.setSuccess(false);

          return new ResponseEntity<>(response, HttpStatus.OK);
      }

        if(userrepo.existsByEmail(signUpForm.getEmail())){
            response.setMessage("Error:Email is already taken");
            response.setSuccess(false);

            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        //Create a new user
        User user=new User(
                signUpForm.getUsername(),
                encoder.encode(signUpForm.getPassword()),
                signUpForm.getFirstName(),
                signUpForm.getLastName(),
                signUpForm.getEmail());

        Set<UserRole> userRoles=new HashSet<>();
        Set<String> stringRoles=signUpForm.getRoles();

        stringRoles.forEach(roleName->{
            Role role= rolerepo.findByName(roleName)
                    .orElseThrow(()->new RuntimeException("User Role Not Found"));

            userRoles.add(new UserRole(user,role));
        });

        user.setUserRoles(userRoles);

        userrepo.save(user);

        response.setMessage("User register successfully ");
        response.setSuccess(true);
        return new ResponseEntity<>(response,HttpStatus.OK);


    }
}
