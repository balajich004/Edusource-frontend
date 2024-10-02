import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header'; // Adjust this path based on your file structure
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Books from './components/Books/Books'
import Login from "./components/Login/Login"
import About, { githubInfoLoader } from './components/About/About';
import Signup from './components/Signup/Signup';

// Create the routes using createBrowserRouter
const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Home />
                <Footer />
            </>
        ),
    },
    {
        path: '/about',
        element: (
            <>
                <Header />
                <About />
                <Footer />
            </>
        ),
        loader: githubInfoLoader,
    },{
        path: '/books',
        element: (
            <>
                <Header />
                <Books />
                <Footer />
            </>
        ),
        loader: githubInfoLoader,
    }, {
        path: '/login',
        element: (
            <>
                <Login />
            </>
        ),
    },
    {
        path: '/signup',
        element: (
            <>
                <Signup />
            </>
        ),
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;