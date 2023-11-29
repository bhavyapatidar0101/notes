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

import com.library.back.models.Book;
import com.library.back.repositories.BookRepository;


@CrossOrigin
@RestController
@RequestMapping("/api/books")
public class BookController {
	
	@Autowired
	private BookRepository book_table;
	
	
	
	// GET /api/book - retrieve all books
	@GetMapping
	public List<Book> getAll(){
		return book_table.findAll();
	}
	
	// POST /api/books - Create a new book
	@PostMapping
	public boolean add(@RequestBody Book incoming_data) {
		try {
			if(incoming_data.getAuthor().length() == 0 && incoming_data.getAuthor() != null) {
				throw new Exception("Empty Author name");
			}
			if(incoming_data.getDescription().length() == 0 && incoming_data.getDescription() != null) {
				throw new Exception("Description is Empty");
			}
			if(incoming_data.getGenre().length() == 0 && incoming_data.getGenre() != null) {
				throw new Exception("Empty genre");
			}
			if(incoming_data.getIsbn().length() == 0 && incoming_data.getIsbn() != null) {
				throw new Exception("Empty ISBN");
			}
			if(incoming_data.getPublisher().length() == 0 && incoming_data.getPublisher() != null) {
				throw new Exception("Empty Publisher");
			}
			if(incoming_data.getTitle().length() == 0 && incoming_data.getTitle() != null) {
				throw new Exception("Empty Title");
			}
			if(incoming_data.getTotal_copies() == 0) {
				throw new Exception("0 total copies");
			}
			
			book_table.save(incoming_data);
			return true;
		}
		catch(Exception e) {
			System.out.println(e);
			return false;
		}
	}
	
	
	//PUT /api/books - Update book details
	@PutMapping
	public boolean update(@RequestBody Book incoming_data) {
		try {
			if(incoming_data.getId() == 0) {
				throw new Exception("Id not specified");
			}
			if(incoming_data.getAuthor().length() == 0 && incoming_data.getAuthor() != null) {
				throw new Exception("Empty Author name");
			}
			if(incoming_data.getDescription().length() == 0 && incoming_data.getDescription() != null) {
				throw new Exception("Description is Empty");
			}
			if(incoming_data.getGenre().length() == 0 && incoming_data.getGenre() != null) {
				throw new Exception("Empty genre");
			}
			if(incoming_data.getIsbn().length() == 0 && incoming_data.getIsbn() != null) {
				throw new Exception("Empty ISBN");
			}
			if(incoming_data.getPublisher().length() == 0 && incoming_data.getPublisher() != null) {
				throw new Exception("Empty Publisher");
			}
			if(incoming_data.getTitle().length() == 0 && incoming_data.getTitle() != null) {
				throw new Exception("Empty Title");
			}
			if(incoming_data.getTotal_copies() == 0) {
				throw new Exception("0 total copies");
			}
			Book row = book_table.findById(incoming_data.getId()).get();
			row.setAuthor(incoming_data.getAuthor());
			row.setDescription(incoming_data.getDescription());
			row.setGenre(incoming_data.getGenre());
			row.setIsbn(incoming_data.getIsbn());
			row.setPublication_year(incoming_data.getPublication_year());
			row.setPublisher(incoming_data.getPublisher());
			row.setTitle(incoming_data.getTitle());
			row.setTotal_copies(incoming_data.getTotal_copies());
			book_table.save(row);
			return true;
		}
		catch(Exception e) {
			System.out.println(e);
			return false;
		}
	}
	
	//DELETE /api/books/:id - delete book details
	@DeleteMapping("/{id}")
	public boolean delete(@PathVariable("id") int id) {
		try {
			book_table.deleteById(id);
			return true;
		}
		catch(Exception e) {
			System.out.println(e);
			return false;
		}
	}
	
	
	
	// GET /api/books/:id get details of a specific book
	@GetMapping("/{id}")
	public Book details(@PathVariable("id") int id) {
		try {
			return book_table.findById(id).get();
		}
		catch(Exception e) {
			System.out.println(e);
			return new Book();
		}
	}
}
