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
    let articles = this.props.articles.filter(
      (article) => article.categoryId == this.props.category.id
    );
    this.setState({ articles });
  }
  render() {
    return (
      <div className="container m-t-4">
        <h2>
          {this.props.language == "EN"
            ? this.props.category.name.toUpperCase()
            : this.props.category.name_in_mm}
        </h2>
        {this.state.articles.length > 0 ? (
          <div className="row">
            <ArticleList articles={this.state.articles} language={this.props.language} />
          </div>
        ) : (
          <div className="row">
            <p>We don't have any articles right now.</p>
          </div>
        )}
      </div>
    );
  }
}

export default Master;
