package com.library.back.controllers;
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

import com.library.back.dto.BookAddRequestDTO;
import com.library.back.dto.BookAddResponseDTO;
import com.library.back.dto.BookDeleteResponseDTO;
import com.library.back.dto.BookUpdateRequestDTO;
import com.library.back.dto.BookUpdateResponseDTO;
import com.library.back.models.Book;
import com.library.back.repositories.BookRepository;
import com.library.back.services.BookService;


@CrossOrigin
@RestController
@RequestMapping("/api/books")
public class BookController {
	
	@Autowired
	private BookService book_service;
	
	
	
	// GET /api/book - retrieve all books
	@GetMapping
	public List<Book> getAll(){
		return book_service.getAll();
	}
	
	// POST /api/books - Create a new book
	@PostMapping
	public BookAddResponseDTO add(@RequestBody BookAddRequestDTO incoming_data) {
		try {
			
			
			boolean status = book_service.add(incoming_data);
			return new BookAddResponseDTO(status,"Book added");
		}
		catch(Exception e) {
			System.out.println(e);
			return new BookAddResponseDTO(false,"Book not added");
		}
	}
	
	
	//PUT /api/books - Update book details
	@PutMapping
	public BookUpdateResponseDTO update(@RequestBody BookUpdateRequestDTO incoming_data) {
		try {
			
			book_service.update(incoming_data);
			return new BookUpdateResponseDTO(true,"Book updated");
		}
		catch(Exception e) {
			System.out.println(e);
			return new BookUpdateResponseDTO(false,"Book not updated");
		}
	}
	
	//DELETE /api/books/:id - delete book details
	@DeleteMapping("/{id}")
	public BookDeleteResponseDTO delete(@PathVariable("id") int id) {
		try {
			book_service.delete(id);
			return new BookDeleteResponseDTO(true,"Book deleted");
		}
		catch(Exception e) {
			System.out.println(e);
			return new BookDeleteResponseDTO(false,"Book not deleted");
		}
	}
	
	
	
	// GET /api/books/:id get details of a specific book
	@GetMapping("/{id}")
	public Book details(@PathVariable("id") int id) {
		try {
			return book_service.get(id);
		}
		catch(Exception e) {
			System.out.println(e);
			return new Book();
		}
	}
}
