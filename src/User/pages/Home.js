import React, { Component } from "react";
import ArticleList from "../component/ArticleList";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="showcase">
            <h1>
              {this.props.language == "EN"
                ? "Myanmar Web Designers"
                : "မြန်မာ ဝပ် ဒီဇိုင်း"}
            </h1>
          </div>
          <div className="row">
            <div className="col-12 card bg-green">
              <h2>{this.props.language == "EN"
              ? "New Articles"
            :  "အာတီကယ် အသစ်များ"
            }</h2>
              <div className="row">
                <ArticleList articles={this.props.newArticles} language={this.props.language} />
              </div>
            </div>
            <div className="col-12">
              <div className="col-12 card bg-orange">
                <h2>{ this.props.language == "EN"
                  ? "Featured Articles"
                  : "အကြည့်များသော် အာတီကယ်များ"
                  }</h2>
                <div className="row">
                  <ArticleList articles={this.props.featuredArticles} language={this.props.language} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray">
          <footer className="container p-t-16 p-b-16">
            <h3>Copyright Reserved &copy; RN21</h3>
          </footer>
        </div>
      </div>
    );
  }
}
export default Home;
