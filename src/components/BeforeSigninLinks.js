import React, {Component}  from 'react'
import { NavLink } from 'react-router-dom';
class BeforeSigninLinks extends Component {

    constructor(props){
      super(props);
    }

    render() {
      return(

        
        <div className='sidebarNavigationLinks'>
          <NavLink className='button' to="/" activeClassName="selected">Home</NavLink>
          <NavLink className='button' to="/login" activeClassName="selected">Login</NavLink>
          <NavLink className='button' to="/about" activeClassName="selected">About</NavLink>
        </div> 

      )
    }
}

export default BeforeSigninLinks;