import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class AdminNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout() {
        this.props.handleLogout();
    }
  render() {
    return (
      <div className="navigation">
        <nav>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div className="logo">
            <h2 title="Myanmar DESIGNERS">
              <Link to="/">MMDESIGNERS</Link>
            </h2>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/admin">Home</Link>              
            </li>
            <li>
                <a onClick={this.handleLogout} className="pointer">Logout</a>
            </li>
          </ul>
          <div className="side-adjust">
            
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(AdminNav);
