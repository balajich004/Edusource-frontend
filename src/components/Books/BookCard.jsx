import React, { useState } from 'react';
import "./Books.css";

function BookCard(props) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleReadClick = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="book">
      <div className="book-img">
        <img src={props.booksimg} alt="java book" className="bookimage" />
      </div>
      <div className="book-info">
        <div className="book-auth">Written by {props.author}</div>
        <div className="book-desc">{props.desc}</div>
        <div className="book-butt" onClick={handleReadClick}>
          <button className="start-read">Read</button>
        </div>
      </div>

      {/* Popup overlay */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="close-butt">
            <button className="close-btn" onClick={closePopup}>X</button></div>
            <div className="img-cont"><img src={props.booksimg} alt="java book" className="bookimage" /></div>
            <div className='btn-container'>
            <div className="view-btn btnc"><button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24">
              <path d="M572.52 241.4C518.07 135.57 407.62 64 288 64S57.93 135.57 3.48 241.4a48.16 48.16 0 000 29.19C57.93 376.43 168.38 448 288 448s230.07-71.57 284.52-177.41a48.16 48.16 0 000-29.19zM288 400a112 112 0 11112-112 112 112 0 01-112 112zm0-176a64 64 0 1064 64 64 64 0 00-64-64z" />
            </svg>
              </button></div>
              <div className="download-btn btnc"><button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
  <path d="M480 352h-64v48c0 8.837-7.163 16-16 16H112c-8.837 0-16-7.163-16-16v-48H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM264.4 318.6c6.2 6.2 16.38 6.2 22.58 0l119.1-119.1c10.06-10.06 2.94-27.31-11.31-27.31H320V32c0-8.837-7.163-16-16-16h-96c-8.837 0-16 7.163-16 16v140.2H115.3c-14.25 0-21.37 17.25-11.31 27.31L264.4 318.6z"/>
</svg>

              </button></div>
              <div className="add-btn btnc"><button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
  <path d="M432 256c0 13.25-10.75 24-24 24h-144v144c0 13.25-10.75 24-24 24s-24-10.75-24-24V280H72c-13.25 0-24-10.75-24-24s10.75-24 24-24h144V88c0-13.25 10.75-24 24-24s24 10.75 24 24v144h144c13.25 0 24 10.75 24 24z"/>
</svg>

                </button></div>
                </div>
            <p>{props.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookCard;
