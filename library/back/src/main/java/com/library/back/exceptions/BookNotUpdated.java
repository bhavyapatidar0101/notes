package com.library.back.exceptions;

public class BookNotUpdated extends Exception {
	public BookNotUpdated(){
		super("Book was not updated");
	}
}
