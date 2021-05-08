import React, { Component } from "react";
import Article from "./Article";
import Category from "./Category";
import User from "./User";

class ShowAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show,
    };
  }
  render() {
    if (this.props.show == "articles") {
      return this.props.list.map((article, i) => {
        return (
          <Article
            key={i}
            _id={article._id}
            title={article.title}
            description={article.description}
            language="EN"
            createdAt={article.createdAt}
            editedAt={article.editedAt}
          />
        );
      });
    } else if (this.props.show == "categories") {
      return this.props.list.map((category, i) => {
        return (
          <Category
            key={i}
            _id={category._id}
            name={category.name}
            name_in_mm={category.name_in_mm}
            createdAt={category.createdAt}
            editedAt={category.editedAt}
          />
        );
      });
    } else {
      return this.props.list.map((user, i) => {
        return (
          <User
            key={i}
            _id={user._id}
            username={user.username}
            password={user.password}
            createdAt={user.createdAt}
            editedAt={user.editedAt}
          />
        );
      });
    }
  }
}

export default ShowAll;
