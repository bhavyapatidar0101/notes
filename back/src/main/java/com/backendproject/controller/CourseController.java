package com.backendproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backendproject.dto.CourseAddRequestDTO;
import com.backendproject.dto.CourseAddResponseDTO;
import com.backendproject.dto.CourseDeleteResponseDTO;
import com.backendproject.dto.CourseUpdateRequestDTO;
import com.backendproject.dto.CourseUpdateResponseDTO;
import com.backendproject.model.Course;
import com.backendproject.repository.CourseRepository;
@CrossOrigin
@RestController
@RequestMapping("/course")
public class CourseController {
	
	@Autowired
	private CourseRepository course_table;
	
	@GetMapping("/all")
	public List<Course> all() {
		return course_table.findAll();
		}
	
	@GetMapping("/{id}")
		public Course id(@PathVariable("id")int id) {
		return course_table.findById(id).get();
	}
	
	@DeleteMapping("/{id}")
	public CourseDeleteResponseDTO delete(@PathVariable("id")int id) {
		course_table.deleteById(id);
		
		CourseDeleteResponseDTO response = new CourseDeleteResponseDTO();
		response.status=200;
		response.message="success";
		
		return response;
		
	}
	
	@PutMapping
	public CourseUpdateResponseDTO update(@RequestBody CourseUpdateRequestDTO incoming_data) {
		Course row = course_table.findById(incoming_data.id).get();	
		
		row.setName(incoming_data.name);
		row.setDescription(incoming_data.description);
		row.setDuration(incoming_data.duration);
		row.setPrice(incoming_data.price);
		
		course_table.save(row);
		
		CourseUpdateResponseDTO response = new  CourseUpdateResponseDTO();
		response.status=200;
		response.message="success";
		
		return response;
	}
	
	@PostMapping
	public CourseAddResponseDTO add(@RequestBody CourseAddRequestDTO incoming_data) {
		Course row = new Course();
		
		row.setName(incoming_data.name);
		row.setDuration(incoming_data.duration);
		row.setDescription(incoming_data.description);
		row.setPrice(incoming_data.price);
		
		course_table.save(row);
		
		CourseAddResponseDTO response = new CourseAddResponseDTO();
		
		response.status=200;
		response.message="success";
		
		return response;
	}
}
