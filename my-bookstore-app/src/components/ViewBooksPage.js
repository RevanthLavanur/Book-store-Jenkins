import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  '../components/Book.css';

const ViewBooksPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/books');
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    return (
        <div>
            <h1>View Books</h1>
            <table>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
              
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                            <td>{book.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewBooksPage;


