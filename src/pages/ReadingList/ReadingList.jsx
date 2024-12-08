import React, { useState, useEffect } from "react";
import ApiService from "../../service/ApiService";
import "./ReadingList.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Navigate } from "react-router-dom";

const ReadingList = () => {
  const [readingList, setReadingList] = useState([]);
  const [error, setError] = useState("");

  // Fetch the reading list on component mount
  useEffect(() => {
    const fetchReadingList = async () => {
      try {
        const response = await ApiService.getMyReadingList();
        if (response.statusCode === 200) {
          setReadingList(response.readBookList);
        } else {
          setError("Failed to fetch reading list");
          // Navigate('/login');
        }
      } catch (error) {
        console.error("Error fetching reading list:", error);
        setError("Error occurred while fetching your reading list.");
      }
    };
    fetchReadingList();
  }, []);

  // Handle book removal
  const handleRemoveBook = async (bookId) => {
    try {
      await ApiService.removeBookFromReadingList(bookId);
      setReadingList((prevList) =>
        prevList.filter((item) => item.bookDto.id !== bookId)
      );
      alert("Book removed successfully!");
    } catch (error) {
      console.error("Error removing book:", error);
      alert("Failed to remove book from reading list.");
    }
  };

  return (
    <>
    <Navbar />
    <div className="reading-list-container">
      <h2>My Reading List</h2>
      {error && <p className="error-message">{error}</p>}
      {readingList.length === 0 ? (
        <p>No books in your reading list. Start adding some!</p>
      ) : (
        <div className="reading-list-grid">
          {readingList.map((item) => (
            <div key={item.id} className="reading-list-card">
              <img
                src={item.bookDto.bookPhotoUrl}
                alt={item.bookDto.bookTitle}
                className="book-image"
              />
              <div className="book-details">
                <h3>{item.bookDto.bookTitle}</h3>
                <p>{item.bookDto.bookDescription}</p>
                <p>
                  <strong>Type:</strong> {item.bookDto.bookType}
                </p>
                <div className="button-cont">
                <a
                  href={item.bookDto.bookFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-link"
                >
                  Read Book
                </a>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveBook(item.bookDto.id)}
                >
                  Remove from List
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default ReadingList;
