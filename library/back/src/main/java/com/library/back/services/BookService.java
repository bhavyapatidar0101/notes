package com.library.back.services;

import java.util.List;

import com.library.back.dto.BookAddRequestDTO;
import com.library.back.dto.BookUpdateRequestDTO;
import com.library.back.exceptions.BookNotAdded;
import com.library.back.exceptions.BookNotDeleted;
import com.library.back.exceptions.BookNotUpdated;
import com.library.back.exceptions.EmptyFields;
import com.library.back.models.Book;

public interface BookService {
	public List<Book> getAll();
	public Book get(int id);
	public boolean add(BookAddRequestDTO data) throws BookNotAdded , EmptyFields;
	public boolean update(BookUpdateRequestDTO data) throws BookNotUpdated,EmptyFields;
	public boolean delete(int id) throws BookNotDeleted;
}
