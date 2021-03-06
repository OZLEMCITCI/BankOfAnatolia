package com.bank.service.Impl;
import com.bank.dao.UserDAO;
import com.bank.model.User;
import com.bank.repository.UserRepo;
import com.bank.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserDetailServiceImpl  implements UserDetailsService, UserService {

    @Autowired
    UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user=userRepo.findByUsername(username).orElseThrow(()->new UsernameNotFoundException("Username not found "+username));
        return user;
    }

    @Override
    public UserDAO getUserDAO(User user) {
        UserDAO userDAO=new UserDAO();
        userDAO.setUserId(user.getUserId());
        userDAO.setUsername(user.getUsername());
        userDAO.setFirstname(user.getFirstname());
        userDAO.setLastname(user.getLastname());
        userDAO.setEmail(user.getEmail());
        Boolean isAdmin=user
                .getUserRoles()
                .stream()
                .filter(role->role.getRole().getName().equals("ADMIN")).findAny().isPresent();
        userDAO.setIsAdmin(isAdmin);


        return userDAO;


    }

    @Override
    public UserDAO getUserDAOByName(String username) {

        UserDAO userDAO=null;
      Optional<User> user=  userRepo.findByUsername(username);
     if(user.isPresent()){
         userDAO=getUserDAO(user.get());
     }

        return userDAO;
    }


    @Override
    public List<UserDAO> getAllUsers() {
        List<User>users= (List<User>) userRepo.findAll();
        users.stream().map(this::transformUser).collect(Collectors.toList());

        return null;
    }

    public UserDAO transformUser(User user) {
        UserDAO userDAO=new UserDAO();
        userDAO.setUserId(userDAO.getUserId());
        userDAO.setUsername(userDAO.getUsername());
        userDAO.setFirstname(userDAO.getFirstname());
        userDAO.setLastname(userDAO.getLastname());
        userDAO.setEmail(userDAO.getEmail());


        return userDAO;
    }
}
