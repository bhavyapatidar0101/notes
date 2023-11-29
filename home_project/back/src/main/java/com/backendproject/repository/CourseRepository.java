package com.backendproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backendproject.model.Course;

public interface CourseRepository extends JpaRepository<Course,Integer>{

}
