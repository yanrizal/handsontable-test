import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import Layout from './layout/Layout'

@inject("store") @observer
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.store = this.props.store
  }
  
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  authenticate = () => {
    this.store.authenticate(this.state)
  }

  render() {
    return (
      <div className="page-login vertical-align layout-full page-dark text-xs-center" data-animsition-in="fade-in" data-animsition-out="fade-out">>
        <div className="page-content vertical-align-middle" style={{width: "400px"}}>
          <div className="brand">
            <img className="brand-img" src="../../assets//images/logo.png" alt="..." />
            <h2 className="brand-text">Remark</h2>
          </div>
          <p>Sign into your pages account</p>
          <form method="post" action="login.html">
            <div className="form-group form-material floating" data-plugin="formMaterial">
              <input type="text" className="form-control empty" id="inputUsername" name="username" value={this.state.username} onChange={this.handleChange}/>
              <label className="floating-label" htmlFor="inputName">Username</label>
            </div>
            <div className="form-group form-material floating" data-plugin="formMaterial">
              <input type="password" className="form-control empty" id="inputPassword" name="password" value={this.state.password} onChange={this.handleChange}/>
              <label className="floating-label" htmlFor="inputPassword">Password</label>
            </div>
            <div className="form-group clearfix">
              <div className="checkbox-custom checkbox-inline checkbox-primary pull-xs-left">
                <input type="checkbox" id="inputCheckbox" name="remember" />
                <label htmlFor="inputCheckbox">Remember me</label>
              </div>
              <a className="pull-xs-right" href="forgot-password.html">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary btn-block" onClick={this.authenticate}>Sign in</button>
          </form>
          <p>Still no account? Please go to <a href="register.html">Register</a></p>
          <footer className="page-copyright page-copyright-inverse">
            <p>WEBSITE BY amazingSurge</p>
            <p>© 2017. All RIGHT RESERVED.</p>
            <div className="social">
              <a href="javascript:void(0)">
                <i className="icon bd-twitter" aria-hidden="true"></i>
              </a>
              <a href="javascript:void(0)">
                <i className="icon bd-facebook" aria-hidden="true"></i>
              </a>
              <a href="javascript:void(0)">
                <i className="icon bd-dribbble" aria-hidden="true"></i>
              </a>
            </div>
          </footer>
        </div>
      </div>
    )
  }

}
