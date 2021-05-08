import React, { Component } from "react";
import { withRouter } from "react-router";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.match.params.id,
      articles: this.props.articles,
      article: {},
    };
    this.handleBack = this.handleBack.bind(this);
  }
  handleBack() {
    this.props.history.goBack();
  }
  componentDidMount() {
    if (this.props.articles.length > 0) {
      let article = this.state.articles.filter((article, i) => {
        return article._id == this.state._id;
      })[0];
      this.setState({ article: article });
    }
  }
  render() {
    return this.props.articles.length > 0 ? (
      <div className="container m-t-4">
        <div className="row">
          <div className="col-12">
            <h2>{this.state.article.title}</h2>
            <div className="card-body">
              <p>
                {this.props.language == "EN"
                  ? this.state.article.description
                  : this.state.article.description_in_mm}
              </p>
            </div>
            <textarea
              className="input-field-h card-code"
              rows="20"
              defaultValue={this.state.article.code}
            ></textarea>
          </div>
        </div>
        <button className="btn bg-red" onClick={this.handleBack}>
          Back
        </button>
      </div>
    ) : (
      <h2> Detail Page is not had anything to show you.</h2>
    );
  }
}

export default withRouter(Detail);
