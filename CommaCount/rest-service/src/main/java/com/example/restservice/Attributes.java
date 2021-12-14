package com.example.restservice;

public class Attributes {

	boolean error;
	String errorMessage;
	String input;
	int answer;

	public Attributes(boolean error, String errorMessage, String input, int answer) {
		this.error = error;
		this.errorMessage = errorMessage;
		this.input = input;
		this.answer = answer;
	}

	public boolean getError() {
		return error;
	}

	public String getErrorMessage() {
		return errorMessage;
	}
	public String getInput() {
		return input;
	}
	public int getAnswer() {
		return answer;
	}

	public void setError(boolean input) {
		this.error = input;
	}

	public void setErrorMessage(String input) {
		this.errorMessage = input;
	}
	public void setAnswer(int input) {
		this.answer = input;
	}
	public void setInput(String value) {
		this.input = value;
	}
	
}