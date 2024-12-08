import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";
import "./EditProfile.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const EditProfile = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await ApiService.getUserProfile();
                setUser(response.userDto); 
            } catch (error) {
                setError(error.response?.data?.message || error.message);
            }
        };
    
        fetchUserProfile();
    }, []);

    const handleDeleteProfile = async () => {
        if (!window.confirm("Are you sure you want to delete your account?")) {
            return;
        }
        try {
            await ApiService.deleteUser(user.id);
            navigate("/signup");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
        <Navbar />
        <div className="edit-profile-page">
            <h2>Edit Profile</h2>
            {error && <p className="error-message">{error}</p>}
            {user && (
                <div className="profile-details">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                    <button className="delete-profile-button" onClick={handleDeleteProfile}>
                        Delete Profile
                    </button>
                </div>
            )}
        </div>
        <Footer />
        </>
    );
};

export default EditProfile;
