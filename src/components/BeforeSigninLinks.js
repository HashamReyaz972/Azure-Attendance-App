import React, {Component}  from 'react'
import { NavLink } from 'react-router-dom';
class BeforeSigninLinks extends Component {

    constructor(props){
      super(props);
    }

    render() {
      return(

        
        <div className='sidebarNavigationLinks'>
          <div className="home">
          <NavLink className='button' to="/" activeClassName="selected">Home</NavLink>
          </div>
          <div className="login">
          <NavLink className='button' to="/login" activeClassName="selected">Login</NavLink>
          </div>
          <div className="about">
          <NavLink className='button' to="/about" activeClassName="selected">About</NavLink>
          </div>
        </div> 

      )
    }
}

export default BeforeSigninLinks;

