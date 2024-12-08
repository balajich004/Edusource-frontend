import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";
import "./Profile.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [readingHistory, setReadingHistory] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userProfile = await ApiService.getUserProfile();
                setUser(userProfile.user);

                const historyResponse = await ApiService.getMyReadingHistory();
                setReadingHistory(historyResponse.readBookList);
            } catch (error) {
                setError(error.response?.data?.message || error.message);
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = () => {
        ApiService.logout();
        navigate("/home");
    };

    const handleEditProfile = () => {
        navigate("/edit-profile");
    };

    return (
        <>
        <Navbar />
        <div className="profile-page">
            {user && <h2>Welcome, {user.name}</h2>}
            <div className="profile-actions">
                <button className="edit-profile-button" onClick={handleEditProfile}>
                    Edit Profile
                </button>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            {error && <p className="error-message">{error}</p>}
            {user && (
                <div className="profile-details">
                    <h3>My Profile Details</h3>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            )}
            <div className="history-section">
                <h3>My Reading History</h3>
                {readingHistory.length > 0 ? (
                    <div className="reading-list">
                        {readingHistory.map((entry) => (
                            <div key={entry.id} className="reading-item">
                                <img
                                    src={entry.bookDto.bookPhotoUrl}
                                    alt={entry.bookDto.bookTitle}
                                    className="book-photo"
                                />
                                <div className="book-details">
                                    <p><strong>Title:</strong> {entry.bookDto.bookTitle}</p>
                                    <p><strong>Description:</strong> {entry.bookDto.bookDescription}</p>
                                    <p><strong>Type:</strong> {entry.bookDto.bookType}</p>
                                    <a
                                        href={entry.bookDto.bookFileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Read Book
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No reading history found.</p>
                )}
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Profile;
