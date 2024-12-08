import React, { useEffect, useState } from 'react';
import ApiService from '../../service/ApiService';
import './Recents.css';

function Recents() {
  const [recentBooks, setRecentBooks] = useState([]);

  // Fetch books on component mount
  useEffect(() => {
    const fetchRecentBooks = async () => {
      try {
        const response = await ApiService.getAllBooks();
        setRecentBooks(response.bookList.slice(0, 4)); // Get only 4 or less books
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchRecentBooks();
  }, []);

  return (
    <div className="our-recents-add">
      <h1>Our Recent Additions</h1>
      <div className="recent-books-container">
        {recentBooks.map((book) => (
          <div key={book.id} className="book-item">
            <img src={book.bookPhotoUrl} alt={book.bookTitle} className="book-image" />
            <div className="book-details">
              <h2 className="book-title">{book.bookTitle}</h2>
              <p className="book-description">{book.bookDescription}</p>
              <a href={book.bookFileUrl} className="book-link" target="_blank" rel="noopener noreferrer">
                Read Book
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recents;
