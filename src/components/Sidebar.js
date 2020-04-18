import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
      <div className='sidebar'>
        <div className='sidebarUserProfile'>
            <h1>User One</h1>
        </div>
        <div className='sidebarNavigationLinks'>
          <NavLink className='button' to="/" activeClassName="selected">Home</NavLink>
          <NavLink className='button' to="/login" activeClassName="selected">Login</NavLink>
          <NavLink className='button' to="/about" activeClassName="selected">About</NavLink>
        </div>
      </div>
  </div>
  )
}

export default Sidebar;