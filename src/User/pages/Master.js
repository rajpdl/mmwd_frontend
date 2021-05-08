import React, { Component } from "react";
import ArticleList from "../component/ArticleList";

class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    if (this.props.articles.length > 0) {
      let articles = this.props.articles.filter(
        (article) => article.categoryId == this.props.category._id
      );
      this.setState({ articles });
    }
  }
  render() {
    console.log(this.props.articles);
    return this.props.articles.length > 0 ? (
      <div className="container m-t-4">
        <h2>
          {this.props.language == "EN"
            ? this.props.category.name.toUpperCase()
            : this.props.category.name_in_mm}
        </h2>
        {this.state.articles.length > 0 ? (
          <div className="row">
            <ArticleList
              articles={this.state.articles}
              language={this.props.language}
            />
          </div>
        ) : (
          <div className="row">
            <p>We don't have any articles right now.</p>
          </div>
        )}
      </div>
    ) : (
      <h2>It has nothing to show you.</h2>
    );
  }
}

export default Master;
