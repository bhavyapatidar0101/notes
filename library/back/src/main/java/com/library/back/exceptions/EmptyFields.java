package com.library.back.exceptions;

public class EmptyFields extends Exception {
	
	public EmptyFields(){
		super("One of the filed recieved is empty");
	}

}
