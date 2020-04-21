import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect } from 'react-redux'


import BeforeSigninLinks from '../components/BeforeSigninLinks'
import UserLinks from './StudentLinks'
import TeacherLinks from '../components/TeacherLinks'
import SuperAdminLinks from '../components/SuperAdminLinks'

const Sidebar = (props) => {
  let Element = '';
  if(props.role == 'SuperAdmin') {
    Element = SuperAdminLinks;
  } else if(props.role == 'User') {
    Element = UserLinks;
  } else if(props.role == 'Teacher') {
    Element = TeacherLinks;
  } else {
    Element = BeforeSigninLinks
  }

  return (
    <div className='sidebarContainer'>
      <div className='sidebar'>
        <div className='sidebarUserProfile'>
            <h1>User One</h1>
        </div>
      <div><Element /></div>
      </div>
  </div>
  )
}


const mapStateToProps = (state) => {
  return {
    role: state.login.role 
  };
};

export default connect(mapStateToProps)(Sidebar);