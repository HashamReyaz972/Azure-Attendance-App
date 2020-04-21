import React, {Component}  from 'react'
import { NavLink } from 'react-router-dom';
class SuperAdminLinks extends Component {

    constructor(props){
      super(props);
    }

    render() {
      return(

        
        <div className='sidebarNavigationLinks'>
          <NavLink className='button' to="/Student" activeClassName="selected">Student</NavLink>
          <NavLink className='button' to="/Teacher" activeClassName="selected">Teacher</NavLink>
          <NavLink className='button' to="/Admin" activeClassName="selected">Admin</NavLink>
        </div> 

      )
    }
}

export default SuperAdminLinks;