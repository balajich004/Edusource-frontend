import React, { useState } from "react";
import ApiService from "../../service/ApiService";
import "../ManageBooks/ManageBooks.css";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const UpdateBook = () => {

    const { bookId } = useParams();
    const [formData, setFormData] = useState({
        bookPhoto: null,
        bookFile: null,
        bookType: "",
        bookTitle: "",
        bookDescription: "",
    });

    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { bookPhoto, bookFile, bookType, bookTitle, bookDescription } = formData;

        const data = new FormData();
        data.append("photo", bookPhoto);
        data.append("pdf", bookFile);
        data.append("bookType", bookType);
        data.append("bookTitle", bookTitle);
        data.append("bookDescription", bookDescription);

        try {
            const response = await ApiService.updateBook(bookId, data);
            setMessage(response.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Error updating book");
        }
    };

    return (
        <>
        <Navbar />
        <div className="form-container">
            <h2>Update Book</h2>
            <form onSubmit={handleSubmit}>
                <label>Book Photo:</label>
                <input type="file" name="bookPhoto" onChange={handleInputChange} /><br />
                <label>Book PDF:</label>
                <input type="file" name="bookFile" onChange={handleInputChange} /><br />
                <label>Book Type:</label>
                <input type="text" name="bookType" value={formData.bookType} onChange={handleInputChange} /><br />
                <label>Book Title:</label>
                <input type="text" name="bookTitle" value={formData.bookTitle} onChange={handleInputChange} /><br />
                <label>Book Description:</label>
                <textarea name="bookDescription" value={formData.bookDescription} onChange={handleInputChange} />
                <button type="submit">Update Book</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
        <Footer />
        </>
    );
};

export default UpdateBook;
