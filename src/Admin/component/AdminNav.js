import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class AdminNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.handleBurger = this.handleBurger.bind(this);
        this.handleLink = this.handleLink.bind(this);
    }
    handleLogout() {
        this.props.handleLogout();
    }
    handleBurger() {
      const burger = document.querySelector(".burger"),
      navLinks = document.querySelector(".nav-links"),
      linkLists = document.querySelectorAll(".nav-links li");

      navLinks.classList.toggle("nav-active");
      linkLists.forEach((link, i) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinksFadeIn 0.5s ease-in-out forwards 0s`;
        }
      });
      burger.classList.toggle("burger-icon");
    }
    handleLink() {
      const burger = document.querySelector(".burger"),
        navLinks = document.querySelector(".nav-links");
      navLinks.classList.remove("nav-active");
      burger.classList.remove("burger-icon");
    }
  render() {
    return (
      <div className="navigation">
        <nav>
          <div className="burger" onClick={this.handleBurger}>
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
              <Link to="/admin" onClick={this.handleLink}>Home</Link>              
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
