import React, { Component } from "react";
import { withRouter } from "react-router";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            username_error: '',
            password_error: ''
        }
        this.handleCancel = this.handleCancel.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEye = this.handleEye.bind(this);
    }
    handleCancel(e) {
        e.preventDefault();
        this.setState({username: ''}, () => {
            this.setState({password: ''})
        });
    }
    handleLogin(e) {
        e.preventDefault();
        if(this.state.username.length >3 && this.state.password.length > 3) {
            this.props.handleLogin();
            console.log('form submitting.');
            this.props.history.push('/admin');
        }else {
            this.setState({error: 'Username or(and) password is invalid.'})
        }
    }
    handleChange(e) {
        this.setState({error: ''})
        this.setState({[e.target.name]: e.target.value});
    }
    handleEye() {
        const password = document.getElementById('password');
        const eyeInside = document.getElementById('eye-deactive')
        if(password.type == 'password') {
            password.type = 'text';
            eyeInside.className = 'eye-active';
        }else {
            password.type = 'password';
            eyeInside.className = 'eye-deactive';
        }
    }
  render() {
    return (
      <form className="f-400 m-auto" >
        <h2 className="card-title">Login</h2>
        <div className="f-group">
          <input type="text" className="input-field-h" 
          placeholder="Enter username..."
          value={this.state.username}
          name="username"
          onChange={this.handleChange}
          />
        </div>
        <div className="f-group password">
            <input type="password" className="input-field-h"
            id="password"
            placeholder="Enter password..."
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
            /><span className="eye-icon" onClick={this.handleEye}><span className="eye-deactive" id="eye-deactive"></span></span>
        </div>
        <p>{this.state.error}</p>
        <div className="btn-group">
          <button className="btn bg-red" onClick={this.handleCancel}>Cancel</button>
          <button className="btn bg-green" onClick={this.handleLogin}>Login</button>
        </div>
      </form>
    );
  }
}

export default withRouter(Login);
