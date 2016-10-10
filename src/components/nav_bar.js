import React from 'react';
import {Link} from 'react-router';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loggedIn: !!sessionStorage.getItem('jwt')}
    this.logOut = this.logOut.bind(this)
  }

  logOut(event) {
    sessionStorage.removeItem('jwt')
  }

  render() {

    var navBarColor = {
      backgroundColor: "#add8e6",
    }

    return (
      <nav className='navbar navbar-dark' style={navBarColor}>
        <div className='navbar-header'>
          <Link to={"/books"} className='navbar-brand'> Collabowrite </Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to={"/books"} className='navbar-item'> Books </Link></li>
            <li>
              {sessionStorage.getItem('jwt') ? <a href="/login" onClick={this.logOut}>Log Out</a> : <Link to={"/login"} className='navbar-item'> Log In </Link>}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
