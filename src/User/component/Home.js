import React, { Component } from "react";

import HomePage from "./../pages/Home";
import MasterPage from "./../pages/Master";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      allArticles: this.props.allArticles,
      newArticles: this.props.newArticles,
      featuredArticles: this.props.featuredArticles,
    };
  }
  render() {
    if (this.props.category && !this.props.isAdmin) {
      return (
        <MasterPage
          language={this.props.language}
          category={this.props.category}
          articles={this.props.allArticles}
        />
      );
    } else if(!this.props.isAdmin){
      return (
        <HomePage
          language={this.props.language}
          newArticles={this.state.newArticles}
          featuredArticles={this.state.featuredArticles}
        />
      );
    }else {
      return <div className="container m-auto m-t-16">
        <h2>Please Logout the admin account first to use the page.</h2>
      </div>
    }
  }
}

export default Home;
