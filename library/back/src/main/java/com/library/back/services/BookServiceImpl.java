package com.library.back.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.back.dto.BookAddRequestDTO;
import com.library.back.dto.BookUpdateRequestDTO;
import com.library.back.exceptions.BookNotAdded;
import com.library.back.exceptions.BookNotDeleted;
import com.library.back.exceptions.BookNotUpdated;
import com.library.back.exceptions.EmptyFields;
import com.library.back.models.Book;
import com.library.back.repositories.BookRepository;

@Service
public class BookServiceImpl implements BookService{
	
	@Autowired
	private BookRepository book_table;

	@Override
	public List<Book> getAll() {
		return book_table.findAll();
	}

	@Override
	public Book get(int id) {
		try {
			return book_table.findById(id).get();
		}
		catch(Exception e) {
			return new Book();
		}
	}

	@Override
	public boolean add(BookAddRequestDTO data) throws BookNotAdded , EmptyFields{
		
		
	try {	
		if(data.getAuthor().length() == 0 && data.getAuthor() != null) {
			throw new EmptyFields();		}
		if(data.getDescription().length() == 0 && data.getDescription() != null) {
			throw new EmptyFields();		}
		if(data.getGenre().length() == 0 && data.getGenre() != null) {
			throw new EmptyFields();		}
		if(data.getIsbn().length() == 0 && data.getIsbn() != null) {
			throw new EmptyFields();		}
		if(data.getPublisher().length() == 0 && data.getPublisher() != null) {
			throw new EmptyFields();		}
		if(data.getTitle().length() == 0 && data.getTitle() != null) {
			throw new EmptyFields();		}
		if(data.getTotal_copies() == 0) {
			throw new EmptyFields();		}
		
		
		Book book = new Book();
		book.setTitle(data.getTitle());
		book.setAuthor(data.getAuthor());
		book.setDescription(data.getDescription());
		book.setGenre(data.getGenre());
		book.setIsbn(data.getIsbn());
		book.setPublication_year(data.getPublication_year());
		book.setPublisher(data.getPublisher());
		book.setTotal_copies(data.getTotal_copies());
		book_table.save(book);
		return true;
	}
	catch(Exception e) {
		throw new BookNotAdded();
	}
	}

	@Override
	public boolean update(BookUpdateRequestDTO data) throws BookNotUpdated,EmptyFields {
		try{
			
			if(data.getId() == 0) {
				throw new EmptyFields();
			}
			if(data.getAuthor().length() == 0 && data.getAuthor() != null) {
				throw new EmptyFields();			}
			if(data.getDescription().length() == 0 && data.getDescription() != null) {
				throw new EmptyFields();			}
			if(data.getGenre().length() == 0 && data.getGenre() != null) {
				throw new EmptyFields();			}
			if(data.getIsbn().length() == 0 && data.getIsbn() != null) {
				throw new EmptyFields();			}
			if(data.getPublisher().length() == 0 && data.getPublisher() != null) {
				throw new EmptyFields();			}
			if(data.getTitle().length() == 0 && data.getTitle() != null) {
				throw new EmptyFields();			}
			if(data.getTotal_copies() == 0) {
				throw new EmptyFields();			}
		Book book = book_table.findById(data.getId()).get();
		
		book.setTitle(data.getTitle());
		book.setAuthor(data.getAuthor());
		book.setDescription(data.getDescription());
		book.setGenre(data.getGenre());
		book.setIsbn(data.getIsbn());
		book.setPublication_year(data.getPublication_year());
		book.setPublisher(data.getPublisher());
		book.setTotal_copies(data.getTotal_copies());
		book_table.save(book);
		return true;}
		catch(Exception e) {
			throw new BookNotUpdated();
		}
	}

	@Override
	public boolean delete(int id) throws BookNotDeleted {
		try{
			book_table.deleteById(id);
			return true;
		}
		catch(Exception e) {
			throw new BookNotDeleted();
		}
	}

}
