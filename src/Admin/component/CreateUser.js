import React, { Component } from "react";
const uuid = require("uuid");
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid.v1(),
      username: "",
      password: "",
      confirmPassword: "",
      username_error: "",
      password_error: "",
      confirmPassword_error: "",
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleEye = this.handleEye.bind(this);
  }
  handleCancel() {
    this.setState({ username: "" }, () => {
      this.setState({ password: "" }, () => {
        this.setState({ confirmPassword: "" });
      });
    });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleCreate() {
    if (this.state.username.length < 4) {
      this.setState({ username_error: "Username require 4 characters." });
    }
    if (this.state.password.length < 4) {
      this.setState({
        password_error: "Password require at least 4 characters.",
      });
    }
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        confirmPassword_error: "Please enter the same password as the first one.",
      });
    }
    if (
      this.state.username.length > 3 &&
      this.state.password.length > 3 &&
      this.state.confirmPassword.length > 3 &&
      this.state.password == this.state.confirmPassword
    ) {
      console.log(this.state);
      console.log("submitting");
      this.props.handleNewUser({
        id: this.state.id,
        username: this.state.username,
        password: this.state.password,
      });
      alert(
        `Successfully created the user with "${this.state.username}" name.`
      );
      this.handleCancel();
    }
  }
  handleEye() {
    const password = document.getElementById("password");
    const eyeInside = document.getElementById("eye-deactive");
    if (password.type == "password") {
      password.type = "text";
      eyeInside.className = "eye-active";
    } else {
      password.type = "password";
      eyeInside.className = "eye-deactive";
    }
  }
  render() {
    return (
      <div className="f-400 m-auto">
        <h3>Create New User</h3>
        <div className="f-group">
          <input
            type="text"
            className="input-field-h p-l-4"
            placeholder="Enter username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <p className="c-red">{this.state.username_error}</p>
        </div>
        <div className="f-group password">
          <input
            type="password"
            id="password"
            className="input-field-h p-l-4"
            placeholder="Enter password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <span className="eye-icon" onClick={this.handleEye}>
            <span className="eye-deactive" id="eye-deactive"></span>
          </span>
          <p className="c-red">{this.state.password_error}</p>
        </div>
        <div className="f-group">
          <input
            type="password"
            className="input-field-h p-l-4"
            placeholder="Confirm password again..."
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <p className="c-red">{this.state.confirmPassword_error}</p>
        </div>
        <div className="btn-group">
          <button className="btn bg-red" onClick={this.handleCancel}>
            Cancel
          </button>
          <button className="btn bg-green" onClick={this.handleCreate}>
            Create
          </button>
        </div>
      </div>
    );
  }
}

export default Create;
