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
    console.log(this.props.list);
    if (this.props.show == "articles") {
      return this.props.list.map((article, i) => {
        return <Article
          key={i}
          id={article.id}
          title={article.title}
          description={article.description}
          language="EN"
        />;
      });
    } else if (this.props.show == "categories") {
      return this.props.list.map((category, i ) => {
          return <Category 
          key={i}
            id={category.id}
            name={category.name}
            name_in_mm={category.name_in_mm}
          />
      })
    }else {
        return this.props.list.map((user, i) => {
            return <User 
            key={i}
                id={user.id}
                username={user.username}
                password={user.password}
            />
        })
    }
  }
}

export default ShowAll;
