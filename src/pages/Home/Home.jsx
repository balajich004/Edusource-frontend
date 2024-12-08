import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Recents from '../../components/Recents/Recents';
import AuthorSignup from '../../components/AuthorSignup/AuthorSignup';
function Home() {
  return (
    <div className="home">
    <Navbar />
    <div className="home-container">
        <Header />
        <Recents />
        <AuthorSignup />
    </div>
    <Footer />
    </div>
  )
}

export default Home