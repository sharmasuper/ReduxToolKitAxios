import React from 'react';
import {Link} from 'react-router-dom'
import Img from '../Header/Images/I25.png'
function Header() {
  return (
   <>
    <div className='header'>
      <Link to="/">
      <div className='logo'>Movie App</div>
      </Link>
      <div className='user-image'>
        <img src={Img} width="150px" height="150px" alt='user'/>
      </div>
    </div>
   </>
  );
}

export default Header;
