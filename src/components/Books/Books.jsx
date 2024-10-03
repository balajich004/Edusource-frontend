import React from 'react'
import libraryp from "../../images/library.png"
import book1 from "../../images/java-book.png"
import book2 from "../../images/sql-book.png"
import book3 from "../../images/book3.png" 
import book4 from "../../images/book4.png" 
import book5 from "../../images/book5.png" 
import book6 from "../../images/book6.png" 
import book7 from "../../images/book7.png" 
import book8 from "../../images/book8.png" 
import "./Books.css"
import BookCard from './BookCard'
function Books() {
  return (
    <div className='book-container'>
        <div className="search-books" style={{marginBottom:"130px"}}>
            <div className="search-img">
                <img src={libraryp} alt="library image" className='search-bg' style={{ width:'100vw', height: '200px', backgroundColor:'blue'}} />
                <div className="search-bar" style={{position:"absolute",top:"100px",left:"35vw"}}>
                <input type="text" placeholder='Search a book' style={{width:"500px"}} className='searcher'/>
                </div>
            </div>
        </div>
        <div className="lob">
            <BookCard booksimg={book1} author="Kathy Sierra" desc="Head First Java is a complete learning experience in Java and object-oriented programming"/>
            <BookCard booksimg={book2} author="Cathy Tanimura" desc="With the explosion of data, computing power, and cloud data warehouses."/>
            <BookCard booksimg={book3} author="Thomas H. Cormen" desc="Introduction to Algorithms is a book on computer programming,Each chapter focuses on an algorithm, and discusses its design techniques and areas of application."/>

<BookCard booksimg={book4} author="Dennis Ritchie" desc="The seminal guide to the C programming language. This manual, the first on C to be widely available, helped to develop and popularize the language. "/>

<BookCard booksimg={book5} author="Andrew Hunt" desc="The book does not present a systematic theory, but rather a collection of tips to improve the development process in a pragmatic way."/>

<BookCard booksimg={book6} author="Harold Abelson" desc="The book describes computer science concepts using Scheme, a dialect of Lisp. It also uses a virtual register machine and assembler to implement Lisp interpreters and compilers."/>

<BookCard booksimg={book7} author="Donald Knuth" desc="The topics covered by Volumes 1–4A of this authoritative and encyclopedic work include the basic concepts of fundamental algorithms, random numbers, arithmetic algorithms, sorting, searching, and combinatorics."/>

<BookCard booksimg={book8} author="Steve McConnell" desc="Code Complete is a software development book, encouraging developers to continue past code-and-fix programming and the big design up front and waterfall models. It is also a compendium of software construction techniques." />
        </div>
    </div>
  )
}

export default Books