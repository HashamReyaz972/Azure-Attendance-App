import React, {Component}  from 'react'
import { NavLink } from 'react-router-dom';
class StudentLinks extends Component {

    constructor(props){
      super(props);
    }

    render() {
      return(

        
        <div className='sidebarNavigationLinks'>
          <NavLink className='button' to="/userCourses" activeClassName="selected">Courses</NavLink>
        </div> 

      )
    }
}

export default StudentLinks;