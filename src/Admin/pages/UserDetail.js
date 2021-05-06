import React, { Component } from "react";
import { Redirect, withRouter } from "react-router";

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      username: "",
      password: "",
      confirmPassword: "",
      username_error: "",
      password_error: "",
      confirmPassword_error: "",
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
    this.handleEye = this.handleEye.bind(this);
  }

  componentDidMount() {
    this.handleUser();
  }
  handleUser() {
    let user = this.props.users.filter((user) => user.id == this.state.id)[0];
    this.setState({ username: user.username });
    this.setState({ password: user.password });
    this.setState({ confirmPassword: user.password });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleCancel() {
    this.handleUser();
  }
  handleBack() {
    this.props.history.push("/admin", { component: "users" });
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
        confirmPassword_error: "Please enter the same password.",
      });
    }
    if (
      this.state.username.length > 3 &&
      this.state.password.length > 3 &&
      this.state.confirmPassword.length > 3
    ) {
      console.log(this.state);
      console.log("submitting");
      this.props.handleEditUser({
        id: this.state.id,
        username: this.state.username,
        password: this.state.password,
      });
      alert(
        `Successfully updated the user with "${this.state.username}" name.`
      );
      this.handleCancel();
    }
  }
  handleDelete() {
    this.props.handleDeleteUser(this.state.id);
    this.props.history.push('/admin', {component: 'users'});
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
    if (this.props.isAdmin) {
      return (
        <div className="container">
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
            {/* <div className="f-group">
              <input
                type="password"
                className="input-field-h p-l-4"
                placeholder="Confirm password again..."
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
              />
              <p className="c-red">{this.state.confirmPassword_error}</p>
            </div> */}
            <div className="btn-group">
              <button className="btn bg-red" onClick={this.handleBack}>
                Back
              </button>
              <button className="btn bg-red" onClick={this.handleDelete}>
                Delete
              </button>
              <button className="btn bg-red" onClick={this.handleCancel}>
                Cancel Changes
              </button>
              <button className="btn bg-green" onClick={this.handleCreate}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
export default withRouter(UserDetail);
