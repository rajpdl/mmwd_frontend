import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLanguage = this.handleLanguage.bind(this);
    this.handleBurger = this.handleBurger.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleLanguage(e) {
    this.props.handleChangeLanugage(e.target.innerText);
  }
  handleBurger(e) {
    const navLinks = document.querySelector(".nav-links"),
      linkLists = document.querySelectorAll(".nav-links li");

    navLinks.classList.toggle("nav-active");
    linkLists.forEach((link, i) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFadeIn 0.5s ease-in-out forwards 0s`;
      }
    });
    e.target.classList.toggle("burger-icon");
  }
  handleDropdown() {
    const dropdown = document.querySelector(".dropdown"),
      dropdownLinks = document.querySelector(".dropdown-links");
    console.log(dropdown);
    if (dropdown !== null) {
      dropdownLinks.classList.toggle("dropdown-active");
    }
  }
  handleLink() {
    const burger = document.querySelector(".burger"),
      navLinks = document.querySelector(".nav-links");
    navLinks.classList.remove("nav-active");
    burger.classList.remove("burger-icon");
  }
  render() {
    return (
      <div className="bg-dark">
        <nav>
          <div className="burger" onClick={this.handleBurger}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div className="logo">
            <h2 title="Myanmar DESIGNERS">
              <Link to="/">MMWD</Link>
            </h2>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={this.handleLink}>
                Home
              </Link>
            </li>
            {this.props.links
              .filter((link, i) => i < 2)
              .map((link, i) => {
                return (
                  <li key={i}>
                    <Link to={"/" + link._id} onClick={this.handleLink}>
                      {this.props.language == "EN"
                        ? link.name.toUpperCase()
                        : link.name_in_mm}
                    </Link>
                  </li>
                );
              })}
            <li className="dropdown" onClick={this.handleDropdown}>
              {this.props.language == "EN" ? "See More" : "ဆက်ကြည့်"}
              <ul className="dropdown-links">
                {this.props.links
                  .filter((link, i) => i > 1)
                  .map((link, i) => {
                    return (
                      <li key={i}>
                        <Link to={"/" + link._id} onClick={this.handleLink}>
                          {this.props.language == "EN"
                            ? link.name.toUpperCase()
                            : link.name_in_mm}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </li>
          </ul>
          <div className="slider">
            <p
              className={this.props.language == "MM" ? "active language" : "language"}
              onClick={this.handleLanguage}
            >
              MM
            </p>
            <p
              className={this.props.language == "EN" ? "active language" : "language"}
              onClick={this.handleLanguage}
            >
              EN
            </p>
          </div>
        </nav>
      </div>
    );
  }
}

export default UserNav;
