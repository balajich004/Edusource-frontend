import React from 'react'
import "./Home.css"
import homep from "../../images/home.png"
import authp from "../../images/author.png"
import book1 from "../../images/java-book.png"
import book2 from "../../images/sql-book.png"
import "../Books/Books.css"

function Home() {
  return (
    <div className='home-container'>
      <div className="sub-home">
      <div className="home-text">
        <div className="home-main-text">
          Explore the world through <span className='books'>Books</span>
        </div>
        <div className="home-sub-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem velit eaque, natus iure quo modi facere debitis nemo doloremque consequatur delectus dolores, esse ab cupiditate laudantium placeat maxime, vero officiis reprehenderit. Voluptatem eum impedit nam eligendi laboriosam soluta laborum maiores odit iusto!
        </div>
      </div>
      <div className="home-logo">
        <img src={homep} alt="there used to be homep" />
        </div>
      </div>
      <div className="our-recents-add">
        <h1>Our recent Additions</h1>
        <div className="lob">
            <div className="book">
                <div className="book-img">
                    <img src={book1} alt="java book" className='bookimage'/>
                    </div>
                <div className="book-info">
                    <div className="book-auth">Written by Kathy Sierra</div>
                    <div className="book-desc">Head First Java is a complete learning experience in Java and object-oriented programming</div>
                    <div className="book-butt"><button className='start-read'>Read</button></div>
                </div>
            </div>
            <div className="book">
                <div className="book-img">
                    <img src={book2} alt="java book" className='bookimage'/>
                    </div>
                <div className="book-info">
                    <div className="book-auth">Written by Cathy Tanimura</div>
                    <div className="book-desc">With the explosion of data, computing power, and cloud data warehouses.</div>
                    <div className="book-butt"><button className='start-read'>Read</button></div>
                </div>
            </div>
        </div>
      </div>
      <div className="author-signup">
        <div className="sub-auth">
        <div className="auth-logo">
          <img src={authp} alt="author logo" className='author-logo'/>
        </div>
        <div className="auth-context">
          <h2>Join our author program</h2>
          <div className="auth-input">
            <input type="text" placeholder='Enter your username' className='auth-in'/>
          </div>
          <div className="auth-submit">
            <button type="button" className='auth-signup'>Signup</button>
          </div>
        </div></div>
      </div>
    </div>
  )
}

export default Home