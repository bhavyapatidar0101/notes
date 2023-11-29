package com.backendproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backendproject.model.User;

public interface UserRepository extends JpaRepository<User,Integer>{

}
