import React, { useState } from 'react';
import axios from 'axios';


const SaveBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSaveBook = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/books/save', { title, author, price,quantity });
            alert('Book saved successfully!');
            setTitle('');
            setAuthor('');
            setPrice('');
            setQuantity('');
        } catch (error) {
            console.error('Error saving book:', error);
            alert('Error saving book. Please try again.');
        }
    };

    return (
        <div id="Book_Container">
            <h1 id="form_heading">Save Book</h1>
            <form id="form" onSubmit={handleSaveBook}>
                <label id="formlabel_1">
                    Title:
                    </label><br/>
                    <input type="text" className='forminputtype' value={title} onChange={e => setTitle(e.target.value)} /><br/>
                
                <label>
                    Author:
                    </label><br/>
                    <input type="text" className='forminputtype' value={author} onChange={e => setAuthor(e.target.value)} /><br/>
                
                <label>
                    Price:
                    </label><br/>
                    <input type="text" className='forminputtype' value={price} onChange={e => setPrice(e.target.value)} /><br/>
               
                <label>
                    Quantity:
                    </label><br/>
                    <input type="text" className='forminputtype' value={quantity} onChange={e => setQuantity(e.target.value)} /><br/>
               
                <button type="submit" className='forminputtype'>Save Book</button><br/>
            </form>
        </div>
    );
};

export default SaveBook;
