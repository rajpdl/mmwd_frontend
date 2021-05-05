import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: this.props.links,
      showLinks: [],
      unShownLinks: [],
    };
    this.handleLanguage = this.handleLanguage.bind(this);
  }
  componentDidMount() {
    let showLinks = this.state.links.filter((link, i) => i < 2);
    let unShownLinks = this.state.links.filter((link, i) => i > 1);
    this.setState({ showLinks }, () => {
      this.setState({ unShownLinks });
    });
  }
  handleLanguage(e) {
    this.props.handleChangeLanugage(e.target.innerText);
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
              <Link to="/">MMWD</Link>
            </h2>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            {this.state.showLinks.map((link, i) => {
              return (
                <li key={i}>
                  <Link to={"/" + link.id}>
                    {this.props.language == "EN"
                      ? link.name.toUpperCase()
                      : link.name_in_mm}
                  </Link>
                </li>
              );
            })}
            <li className="dropdown">
              {this.props.language == "EN" ? "See More" : "ဆက်ကြည့်"}
              <ul className="dropdown-links">
                {this.state.unShownLinks.map((link, i) => {
                  return (
                    <li key={i}>
                      <Link to={"/" + link.id}>
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
              className={this.props.language == "MM" ? "active" : ""}
              onClick={this.handleLanguage}
            >
              MM
            </p>
            <p
              className={this.props.language == "EN" ? "active" : ""}
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
