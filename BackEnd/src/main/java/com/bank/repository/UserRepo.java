package com.bank.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bank.model.User;

//the user repo interface is used to connect User Table

@Repository
public interface UserRepo extends CrudRepository<User,Long> {
	
	Optional<User> findByUsername(String username);
	
	Boolean existByUsername(String username);
	
	Boolean findByEmail(String email);
	List<User> findAll();
	
	long count();
	

}
