import React, { useState, useEffect } from "react";
import BookSearch from "../../components/BookSearch/BookSearch";
import BookResult from "../../components/BookResult/BookResult";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ApiService from "../../service/ApiService";
import Pagination from "../../components/Pagination/Pagination";

function Books() {
  const [bookSearchResults, setBookSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5); // Number of books to display per page
  const [loading, setLoading] = useState(false);

  // Fetch all books on component mount
  useEffect(() => {
    const fetchAllBooks = async () => {
      setLoading(true);
      try {
        const response = await ApiService.getAllBooks();
        if (response.statusCode === 200) {
          setBookSearchResults(response.bookList);
        } else {
          console.error("Failed to retrieve books:", response.message);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllBooks();
  }, []);

  const handleSearchResult = (results) => {
    setBookSearchResults(results);
    setCurrentPage(1); // Reset to first page on new search
  };

  // Calculate the books to display for the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = bookSearchResults.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <BookSearch handleSearchResult={handleSearchResult} />
      {loading ? (
        <p>Loading books...</p>
      ) : (
        <BookResult bookSearchResults={currentBooks} isAdmin={ApiService.isAdmin()} />
      )}
      <Pagination
        itemsPerPage={booksPerPage}
        totalItems={bookSearchResults.length}
        currentPage={currentPage}
        paginate={paginate}
      />
      <Footer />
    </>
  );
}

export default Books;
