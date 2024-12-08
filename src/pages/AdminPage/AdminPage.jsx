import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";
import "./AdminPage.css"; 
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const AdminPage = () => {
    const [adminName, setAdminName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdminName = async () => {
            try {
                const response = await ApiService.getUserProfile();
                setAdminName(response.userDto.name); // Updated based on your API response
            } catch (error) {
                console.error("Error fetching admin details:", error.message);
            }
        };

        fetchAdminName();
    }, []);

    return (
        <>
        <Navbar />
        <div className="admin-page">
            <h1 className="welcome-message">Welcome, {adminName}</h1>
            <div className="admin-actions">
                <button className="admin-button" onClick={() => navigate('/admin/manage-books')}>
                    Manage Books
                </button>
                <button className="admin-button" onClick={() => navigate('/admin/manage-users')}>
                    Manage Users
                </button>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default AdminPage;
