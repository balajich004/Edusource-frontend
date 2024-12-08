import React, { useState } from "react";
import ApiService from "../../service/ApiService";
import "./AddBook.css";
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const AddBook = () => {
    const [formData, setFormData] = useState({
        bookPhoto: null,
        bookFile: null,
        bookType: "",
        bookTitle: "",
        bookDescription: "",
    });

    const [message, setMessage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [pdfPreview, setPdfPreview] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            if (name === "bookPhoto") {
                setFormData({
                    ...formData,
                    [name]: files[0],
                });
                setImagePreview(URL.createObjectURL(files[0]));
            } else if (name === "bookFile") {
                setFormData({
                    ...formData,
                    [name]: files[0],
                });
                setPdfPreview(files[0]);
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
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
            const response = await ApiService.addBook(data);
            setMessage(response.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Error adding book");
        }
    };

    return (
        <>
        <Navbar />
        <div className="form-container">
            <h2>Add New Book</h2>
            <form onSubmit={handleSubmit}>
                <label>Book Photo:</label>
                <input 
                    type="file" 
                    name="bookPhoto" 
                    onChange={handleInputChange} 
                    accept="image/*" 
                />
                {imagePreview && (
                    <div className="image-preview">
                        <img src={imagePreview} alt="Book Preview" />
                    </div>
                )}<br />

                <label>Book PDF:</label>
                <div 
                    className="pdf-drop-area" 
                    onDragOver={(e) => e.preventDefault()} 
                    onDrop={(e) => {
                        e.preventDefault();
                        handleInputChange({
                            target: {
                                name: "bookFile",
                                files: e.dataTransfer.files,
                            },
                        });
                    }}
                >
                    <input 
                        type="file" 
                        name="bookFile" 
                        onChange={handleInputChange} 
                        accept="application/pdf" 
                    />
                    <p>Drag and drop a PDF here</p>
                </div>
                {pdfPreview && (
                    <p>{pdfPreview.name}</p>
                )}
                <br />
                <label>Book Type:</label>
                <input 
                    type="text" 
                    name="bookType" 
                    value={formData.bookType} 
                    onChange={handleInputChange} 
                    required 
                /><br />
                <label>Book Title:</label>
                <input 
                    type="text" 
                    name="bookTitle" 
                    value={formData.bookTitle} 
                    onChange={handleInputChange} 
                    required 
                /><br />
                <label>Book Description:</label>
                <textarea 
                    name="bookDescription" 
                    value={formData.bookDescription} 
                    onChange={handleInputChange} 
                />
                <button type="submit">Add Book</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
        <Footer />
        </>
    );
};

export default AddBook;
