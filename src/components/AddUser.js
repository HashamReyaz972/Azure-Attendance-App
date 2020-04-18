import React, {Component}  from 'react'
import API from '../api'

class AddUser extends Component {
  constructor(props){
    super(props);

    this.state={
        first_name: "",
        last_name: "",
        email: "",
        role: "",
        password: "",
        confirm_password: "",
        confirm_password_error: "",
        remember_me: true
    }
  }

  onFirstNameChange = (e) => {
    const first_name = e.target.value;
    this.setState(() => ({first_name}))
  }

  onLastNameChange = (e) => {
    const last_name = e.target.value;
    this.setState(() => ({last_name}))
  }

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({email}))
  }

  onPasswrordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({password}))
  }

  onConfirmPasswordChange = (e) => {
    const confirm_password = e.target.value;
    if(this.state.password !== confirm_password) {
      this.setState(() => ({confirm_password_error: 'Password don\'t match ', confirm_password}))
    } else if (this.state.password == confirm_password) {
      this.setState(() => ({confirm_password_error: '', confirm_password}))
    } else {
      this.setState(() => ({confirm_password}))
    }
    

  }

  onRoleChange = (e) => {
    const role = e.target.value;
    this.setState(() => ({role}))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const first_name = this.state.first_name;
    const last_name = this.state.last_name;
    const email = this.state.email;
    const password = this.state.password;
    const role = this.state.role;

    API.post('/signup', {
      first_name,
      last_name,
      email,
      password,
      role

    })
    .then(res => {
      console.log(res)
    })
    
  }

  render() {
    return(
      <div className='rightContainer signupFormContainer'>
        <div className="signupFieldsContainer">
          <form action="">
          <div className="NameWrapper">
            <label htmlFor="">First Name</label>
            <input type="text" id="firstName" value={this.state.first_name} onChange={this.onFirstNameChange}/>
          </div>

          <div className="NameWrapper">
            <label htmlFor="">Last Name</label>
            <input type="text" id="lastName" value={this.state.last_name} onChange={this.onLastNameChange} />
          </div>

          <div className="formWrapper">
            <label htmlFor="">Email</label>
            <input type="email" value={this.state.email} onChange={this.onEmailChange  } />
          </div>

          <div className="formWrapper">
            <label htmlFor="">Password</label>
            <input type="password"  value={this.state.password} onChange={this.onPasswrordChange  }  />
          </div>

          <div className="formWrapper">
            <label htmlFor="">Confirm Password</label>
            <input type="password"  value={this.state.confirm_password} onChange={this.onConfirmPasswordChange  } />
            <p>{this.state.confirm_password_error}</p>
          </div>

          <div className='formWrapper'>
          <label htmlFor="">Admin</label>
          <input type="radio" id='Admin' name='role' value='Admin' checked={this.state.role === 'Admin'} onChange={this.onRoleChange} />
          <label htmlFor="">Student</label>
          <input type="radio" id='Student' name='role' value='Student' checked={this.state.role === 'Student'} onChange={this.onRoleChange} />
          <label htmlFor="">Teacher</label>
          <input type="radio" id='Teacher' name='role' value='Teacher' checked={this.state.role === 'Teacher'} onChange={this.onRoleChange} />

          </div>

          <div className="formWrapper">
            <input type="checkbox" id="remember_me" name="remember_me" value="true"></input>
          </div>

          <div className="formWrapper">
            <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
          </div>
          </form>
         

        </div>
      </div>
    )
  }

}

export default AddUser;