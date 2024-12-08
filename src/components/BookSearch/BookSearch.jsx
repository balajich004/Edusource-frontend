import React, { useState, useEffect } from 'react';
import ApiService from '../../service/ApiService';
import "./BookSearch.css";

const BookSearch = ({ handleSearchResult }) => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookType, setBookType] = useState('');
  const [bookTypes, setBookTypes] = useState([]);
  const [error, setError] = useState('');

  // Fetch book types on component mount
  useEffect(() => {
    const fetchBookTypes = async () => {
      try {
        const types = await ApiService.getBookTypes(); // Fetch book types
        setBookTypes(types);
      } catch (error) {
        console.error('Error fetching book types:', error.message);
      }
    };
    fetchBookTypes();
  }, []);

  // Display error messages
  const showError = (message, timeout = 5000) => {
    setError(message);
    setTimeout(() => setError(''), timeout);
  };

  // Handle book search
  const handleSearch = async () => {
    if (!bookTitle || !bookType) {
      showError('Please provide both book title and book type.');
      return;
    }
    try {
      const response = await ApiService.getBookById(bookTitle); // Search books by title
      if (response.statusCode === 200 && response.bookList) {
        const filteredBooks = response.bookList.filter(
          (book) => book.bookType === bookType
        ); // Filter by bookType
        if (filteredBooks.length > 0) {
          handleSearchResult(filteredBooks);
        } else {
          showError('No books found matching the criteria.');
        }
      } else {
        showError('No books found matching the criteria.');
      }
    } catch (error) {
      showError('An error occurred while searching for books.');
      console.error(error.message);
    }
  };

  return (
    <section className="search-container">
      <div className="search-field">
        <label htmlFor="book-title">Book Title</label>
        <input
          type="text"
          id="book-title"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          placeholder="Enter book title"
        />
      </div>
      <div className="search-field">
        <label htmlFor="book-type">Book Type</label>
        <select
          id="book-type"
          value={bookType}
          onChange={(e) => setBookType(e.target.value)}
        >
          <option value="" disabled>
            Select book type
          </option>
          {bookTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="sbutton">
        <button className="home-search-button" onClick={handleSearch}>
        Search
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </section>
  );
};

export default BookSearch;
