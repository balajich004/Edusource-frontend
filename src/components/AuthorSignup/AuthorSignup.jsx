import React from 'react'
import '../../pages/Home/Home.css'
import authp from "../../images/author.png"

function AuthorSignup() {
  return (
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
  )
}

export default AuthorSignup