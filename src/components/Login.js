import React, {Component}  from 'react'
import API from '../api'

class Login extends Component {
  constructor(props){
    super(props);

    this.state={
        email: '',
        password: '',
        email_error: '',
        password_error: ''
    }
  }

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({email}))
  }

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({password}))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    API.post('/login', {
      email,
      password

    })
    .then(res => {
      console.log(res)
    })

  }

  render() {
    return(
      <div className='rightContainer'>
        <div className="loginFormContainer">
            <form action="">
              <div className="formContents">
              <div className="logoContainer">
                <h1>Login</h1>
              </div>
              <div className="inputFeldsContainer">
                <input type="email" placeholder='Type your email' value={this.state.email} onChange={this.onEmailChange} />
                <input type="password" placeholder='Type your password' value={this.state.password} onChange={this.onPasswordChange}/>
                <div className='forgotPasswordLink'>
                  <a href='#'>Forgot Password?</a>
                </div>
                <button type="submit" onClick={this.handleSubmit}>Login User</button>
              </div>
              </div>
            </form>
          </div>
      </div>
    )

}
}

export default Login;