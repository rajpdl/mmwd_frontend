import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../Admin/component/AdminNav";
import UserNav from "./UserNav";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.isAdmin) {
      return <AdminNav handleLogout={this.props.handleLogout} />;
    } else {
      return (
        <UserNav
        links={this.props.links}
        language={this.props.language}
        handleChangeLanugage={this.props.handleChangeLanugage}
        />
      );
    }
  }
}

export default Navigation;
