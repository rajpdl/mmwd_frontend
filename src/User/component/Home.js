import React, { Component } from "react";

import HomePage from "./../pages/Home";
import MasterPage from "./../pages/Master";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.allArticles.length > 0) {
      if (this.props.category && !this.props.isAdmin) {
        return (
          <MasterPage
            language={this.props.language}
            category={this.props.category}
            articles={this.props.allArticles}
          />
        );
      } else if (!this.props.isAdmin) {
        return (
          <HomePage
            language={this.props.language}
            newArticles={this.props.newArticles}
            featuredArticles={this.props.featuredArticles}
          />
        );
      } else {
        return (
          <div className="container m-auto m-t-16">
            <h2>Please Logout the admin account first to use the page.</h2>
          </div>
        );
      }
    } else {
      return <div className="container m-t-4">
        <h2>We haven't created any articles sorry for now.</h2>
      </div>
    }
  }
}

export default Home;
