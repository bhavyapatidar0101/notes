package com.library.back.dto;

import java.sql.Date;

public class BookAddRequestDTO {
	private String title;
	private String author;
	private String isbn;
	private String genre;
	private Date publication_year;
	private String publisher;
	private int total_copies;
	private String description;

	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getIsbn() {
		return isbn;
	}
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public Date getPublication_year() {
		return publication_year;
	}
	public void setPublication_year(Date publication_year) {
		this.publication_year = publication_year;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public int getTotal_copies() {
		return total_copies;
	}
	public void setTotal_copies(int total_copies) {
		this.total_copies = total_copies;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public BookAddRequestDTO(String title, String author, String isbn, String genre, Date publication_year,
			String publisher, int total_copies, String description) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
		this.genre = genre;
		this.publication_year = publication_year;
		this.publisher = publisher;
		this.total_copies = total_copies;
		this.description = description;
	}
	public BookAddRequestDTO() {
	}
	
	
}
