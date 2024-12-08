import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Books from './pages/Books/Books';
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/EditProfile/EditProfile';
import AdminPage from './pages/AdminPage/AdminPage';
import ManageBooks from './pages/ManageBooks/ManageBooks';
import AddBook from './pages/AddBook/AddBook';
import ViewBooks from './pages/ViewBooks/ViewBooks';
import UpdateBook from './pages/UpdateBook/UpdateBook';
import ReadingList from './pages/ReadingList/ReadingList';
import ManageUsers from './pages/ManageUsers/ManageUsers';
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/books" element={<Books />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/edit-profile' element={<EditProfile />} />
                <Route path='/admin' element={<AdminPage />} />
                <Route path="/admin/manage-books" element={<ManageBooks />} />
                <Route path="/admin/add-book" element={<AddBook />} />
                <Route path="/admin/view-books" element={<ViewBooks />} />
                <Route path="/admin/update-book/:bookId" element={<UpdateBook />} />
                <Route path='/reading-list' element={<ReadingList />} />
                <Route path='/admin/manage-users' element={<ManageUsers />} />
            </Routes>
        </div>
    );
}

export default App;
