import React from 'react';
import {Link} from 'react-router';

export default function NavBar(props){
  return (
    <nav className='navbar navbar-inverse'>
      <div className='navbar-header'>
        <Link to={"/books"} className='navbar-brand'> Collabowrite </Link>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li><Link to={"/books"} className='navbar-item'> Books </Link></li>
          <li><Link to={"/login"} className='navbar-item'> Log In </Link></li>
        </ul>
      </div>
    </nav>
  )
}
