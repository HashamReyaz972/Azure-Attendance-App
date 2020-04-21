import React, {Component}  from 'react'
import { NavLink } from 'react-router-dom';
class TeacherLinks extends Component {

    constructor(props){
      super(props);
    }

    render() {
      return(

        
        <div className='sidebarNavigationLinks'>
          <NavLink className='button' to="/addAttendance" activeClassName="selected">Add Attendance</NavLink>
          <NavLink className='button' to="/editAttendance" activeClassName="selected">Edit Attendance</NavLink>
        </div> 

      )
    }
}

export default TeacherLinks;