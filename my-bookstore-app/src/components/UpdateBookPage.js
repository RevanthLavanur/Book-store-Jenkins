import React, { useState } from 'react';
import axios from 'axios';

const UpdateBookPage = () => {
  const [bookId, setBookId] = useState('');
  const [book, setBook] = useState({
    title: '',
    author: '',
    price: '',
    quantity: ''
  });

  const handleIdChange = async (e) => {
    const { value } = e.target;
    setBookId(value);
    if (value) {
      try {
        const response = await axios.get(`http://localhost:8080/api/books/${value}`);
        const fetchedBook = response.data;
        setBook({
          title: fetchedBook.title,
          author: fetchedBook.author,
          price: fetchedBook.price,
          quantity: fetchedBook.quantity
        });
      } catch (error) {
        console.error('Error fetching book:', error);
        // Optionally, handle error
      }
    } else {
      // Clear the book details if bookId is empty
      setBook({
        title: '',
        author: '',
        price: '',
        quantity: ''
      });
    }
  };

  const handleUpdateBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/api/books/${bookId}`, book);
      console.log('Book updated successfully:', response.data);
      // Show success alert
      alert('Book updated successfully');
      // Optionally, display a success message or redirect to another page
    } catch (error) {
      console.error('Error updating book:', error);
      // Optionally, display an error message
    }
  };

  return (
    <div id="Book_Container">
      <h1 id="form_heading">Update Book</h1>
      <form id="form" onSubmit={handleUpdateBook}>
        <div>
          <label id="formlabel_1">Book ID:</label><br/>
          <input type="text" className='forminputtype' value={bookId} onChange={handleIdChange} />
        </div>
        <div>
          <label>Title:</label><br/>
          <input type="text" className='forminputtype' value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} />
        </div>
        <div>
          <label>Author:</label><br/>
          <input type="text" className='forminputtype' value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value })} />
        </div>
        <div>
          <label>Price:</label><br/>
          <input type="text" className='forminputtype' value={book.price} onChange={(e) => setBook({ ...book, price: e.target.value })} />
        </div>
        <div>
          <label>Quantity:</label><br/>
          <input type="text" className='forminputtype' value={book.quantity} onChange={(e) => setBook({ ...book, quantity: e.target.value })} />
        </div>
        <button type="submit" className='forminputtype'>Update Book</button><br/>
      </form>
    </div>
  );
};

export default UpdateBookPage;
