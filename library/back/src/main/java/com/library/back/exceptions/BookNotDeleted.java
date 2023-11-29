package com.library.back.exceptions;

public class BookNotDeleted extends Exception{
	public BookNotDeleted(){
		super("Book was not deleted");
	}
}
