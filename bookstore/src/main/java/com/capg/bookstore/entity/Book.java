package com.capg.bookstore.entity;

import jakarta.persistence.*;

@Entity
@Table(name="bookstoretbl")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="title")
    private String title;
    
    @Column(name="author")
    private String author;
    
    @Column(name="price")    
    private double price;
    
    @Column(name="quantity")
    private int quantity;
    
    // Getters and setters
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
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
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
   
    
}
