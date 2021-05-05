import React, { Component } from "react";

import Article from "./Article";

class ArticleList extends Component {
  render() {
    return this.props.articles.map((article, i) => {
      return (
        <Article
          key={i}
          id={article.id}
          title={article.title}
          description={article.description}
          description_in_mm={article.description_in_mm}
          language={this.props.language}
        />
      );
    });
  }
}

export default ArticleList;
