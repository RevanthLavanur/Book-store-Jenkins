import React from 'react';
import BgBookLogo from '../components/Images/BGBook.jpg';

const About = () => {
    return (
        <div class="container">
            
            <img src={BgBookLogo} style={{ width: "1000px", height: "600px" }} alt="BgBookImage" />
            <div class="content">
            <h1>About the Bookstore Application</h1>
            <p style={{ fontSize: "22px", color: "white", fontFamily: "Times New Roman" }}>
                The Bookstore Application is a web-based application designed to manage books in a bookstore.
                It provides functionalities such as viewing, updating, deleting, and saving books.
           
                This application allows users to perform various operations on books, including adding new books,
                updating existing book information, deleting books, and viewing the list of available books.
            
                It is built using technologies such as React for the frontend, Spring Boot for the backend,
                and Hibernate and with postgre-sql database management.
        
        
                The Bookstore Application aims to provide an efficient and user-friendly interface for managing
                bookstore operations and improving the overall book management process.
            </p>
            </div>
        </div>
    );
};

export default About;
