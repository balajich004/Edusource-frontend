// import React from 'react'
// import homep from "../../images/home.png"
// import '../../pages/Home/Home.css'
// import { Link } from 'react-router-dom'
// function Header() {
//   return (
//     <div className="sub-home">
//       <div className="home-text">
//         <div className="home-main-text">
//           Explore the world through <span className='books'>Books</span>
//         </div>
//         <div className="home-sub-text">
//         A good book is like a conversation with the finest minds of the past and present. It captivates, enlightens, and enriches, leaving a lasting imprint on your heart. Discover the power of stories that transcend time and space.
//         </div>
//         <div className="home-sub-btn" style={{marginTop:"10px"}}>
//           <Link to="/books" className='hsb' style={{textDecoration:"none",color:"black"}}>Explore now</Link>
//         </div>
//       </div>
//       <div className="home-logo">
//         <img src={homep} alt="there used to be homep" />
//         </div>
//       </div>
//   )
// }

// export default Header

import React from 'react';
import homep from "../../images/home.png";
import './/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="home-header">
      <div className="home-text">
        <div className="home-main-text">
          "Books are a uniquely portable magic."
        </div>
        <div className="home-sub-text">
          Step into a world of endless stories, wisdom, and adventures. Whether you seek inspiration or knowledge, every book has a new journey to offer.
        </div>
        <div className="home-sub-btn">
          <Link to="/books" className='explore-btn'>Explore Books</Link>
        </div>
      </div>
      <div className="home-image">
        <img src={homep} alt="Books" className="home-img" />
      </div>
    </div>
  );
}

export default Header;
