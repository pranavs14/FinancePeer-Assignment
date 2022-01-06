import {Component} from 'react'
import './index.css'

class LoginPage extends Component {
  render() {
    console.log('Login')
    return (
      <div className="login-container">
        <form className="login-form-container">
          <h1 className="login-header">Login Form</h1>
          <label htmlFor="userName" className="label-element">
            USERNAME
          </label>
          <input
            type="text"
            className="input-element"
            placeholder="Username"
            id="userName"
          />
          <label className="label-element" htmlFor="passWord">
            PASSWORD
          </label>
          <input
            type="password"
            className="input-element"
            id="passWord"
            placeholder="Password"
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginPage
