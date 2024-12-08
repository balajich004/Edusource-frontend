import React from "react";
import ApiService from "../../service/ApiService";
import { useNavigate } from "react-router-dom";
import "./BookResult.css";

const BookResult = ({ bookSearchResults, isAdmin }) => {
  const navigate = useNavigate();

  const addToReadingList = async (bookId) => {
    try {
      // Add to reading list
      await ApiService.addBookToReadingList(bookId);
      alert("Book added to your reading list!");

      // Automatically add to reading history after adding to the reading list
      await ApiService.addBookToReadingHistory(bookId);
      alert("Book added to your reading history!");
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book.");
    }
  };

  // const viewBook = async (bookId) => {
  //   try {
  //     // First, call the addBookToReadingHistory API to add the book to reading history
  //     await ApiService.addBookToReadingHistory(bookId);
  
  //     // Optionally, you can show a message or handle the UI feedback for success
  //     alert('Book added to reading history!');
  
  //     // Now, navigate to the book details or perform any additional action
  //     // Example: Navigate to the book details page
  //     history.push(`/books/${bookId}`);
  //   } catch (error) {
  //     console.error("Error adding book to reading history:", error);
  //     alert('Error occurred while adding the book to reading history.');
  //   }
  // };
  
  // const addToReadingList = async (bookId) => {
  //   try {
  //     await ApiService.addBookToReadingList(bookId);
  //     // Add the book to reading history as well
  //     await ApiService.addBookToReadingHistory(bookId);
  
  //     // Show success message
  //     alert('Book added to reading list and history!');
  //   } catch (error) {
  //     console.error("Error adding book:", error);
  //     alert('Error occurred while adding the book.');
  //   }
  // };

  const editBook = (bookId) => {
    // Navigate to the update book page using the bookId
    navigate(`/admin/update-book/${bookId}`);
  };

  return (
    <div className="book-result-container">
      {bookSearchResults.length === 0 ? (
        <p>No books found. Try another search!</p>
      ) : (
        bookSearchResults.map((book) => (
          <div key={book.id} className="book-card">
            <img
              src={book.bookPhotoUrl}
              alt={book.bookTitle}
              className="book-image"
            />
            <h3>{book.bookTitle}</h3>
            <p>{book.bookDescription}</p>
            <p>
              <strong>Type:</strong> {book.bookType}
            </p>
            <div className="action-buttons">
              <button
                className="action-btn"
                onClick={() => addToReadingList(book.id)}
              >
                Add to Reading List
              </button>
              <button
                className="action-btn"
                onClick={() => window.open(book.bookFileUrl, '_blank')}
              >
                View
              </button>
              {isAdmin && (
                <button
                  className="action-btn edit-btn"
                  onClick={() => editBook(book.id)}
                >
                  Edit Book
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BookResult;
