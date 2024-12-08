import React, { useState, useEffect } from "react";
import ApiService from "../../service/ApiService";
import { useNavigate } from "react-router-dom"; // Change here
import "./ManageUsers.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Change here

  useEffect(() => {
    if (!ApiService.isAdmin()) {
      navigate("/login"); // Change here to use navigate instead of history
    }

    const fetchUsers = async () => {
      try {
        const response = await ApiService.getAllUsers();
        if (response.statusCode === 200) {
          setUsers(response.userList);
        } else {
          setError(response.message);
        }
      } catch (error) {
        setError(error.response?.data?.message || error.message);
      }
    };

    fetchUsers();
  }, [navigate]); // Change here to add navigate as a dependency

  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      try {
        const response = await ApiService.deleteUser(userId);
        if (response.statusCode === 200) {
          setUsers(users.filter((user) => user.id !== userId)); // Remove the user from the list
        }
      } catch (error) {
        setError("Failed to delete user.");
      }
    }
  };

  return (
    <>
    <Navbar />
    <div className="manage-users">
      <h2>Manage Users</h2>
      {error && <p className="error-message">{error}</p>}
      {users.length > 0 ? (
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users available.</p>
      )}
    </div>
    <Footer />
    </>
  );
};

export default ManageUsers;
