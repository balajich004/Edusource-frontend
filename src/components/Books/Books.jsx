import React from 'react'
import libraryp from "../../images/library.png"
import book1 from "../../images/java-book.png"
import book2 from "../../images/sql-book.png"
import "./Books.css"
function Books() {
  return (
    <div className='book-container'>
        <div className="search-books">
            <div className="search-img">
                <img src={libraryp} alt="library image" className='search-bg' style={{ width:'100vw', height: '200px', backgroundColor:'blue'}} />
                <div className="search-bar" style={{position:"absolute",top:"100px",left:"35vw"}}>
                <input type="text" placeholder='Search a book' style={{width:"500px"}} className='searcher'/>
                </div>
            </div>
        </div>
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
  )
}

export default Books