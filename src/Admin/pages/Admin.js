import React, { Component } from "react";
import CreateArticle from "../component/CreateArticle";
import ShowAll from "../component/ShowAll";
import CreateCategory from '../component/CreateCategory'
import CreateUser from '../component/CreateUser'
import { withRouter } from "react-router";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: "articles",
      articles: this.props.articles,
      categories: this.props.categories,
      users: this.props.users,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if(this.props.location.state) {
      this.setState({component: this.props.location.state.component })
    }

  }
  handleClick(e) {
    e.preventDefault();
    this.setState({ component: e.target.attributes.data.value });
  }
  render() {
    return (
      <div className="bg-gray">
        <div className="row">
          <div className="col-12 col-md-2 p-4">
            <h3 className="card-title">Welcome To Admin Dashboard</h3>
            <ul className="side-links">
              <li className={this.state.component == 'articles' ? 'active': ''}>
                <a href="#" data="articles" onClick={this.handleClick}>
                  Articles
                </a>
              </li>
              <li className={this.state.component == 'create-article' ? 'active': ''}>
                <a href="#" data="create-article" onClick={this.handleClick}>
                  Create Article
                </a>
              </li>
              <li className={this.state.component == 'categories' ? 'active': ''}>
                <a href="#" data="categories" onClick={this.handleClick}>
                  Categories
                </a>
              </li>
              <li className={this.state.component == 'create-category' ? 'active': ''}>
                <a href="#" data="create-category" onClick={this.handleClick}>
                  Create Category
                </a>
              </li>
              <li className={this.state.component == 'users' ? 'active': ''}>
                <a href="#" data="users" onClick={this.handleClick}>
                  Users
                </a>
              </li>
              <li className={this.state.component == 'create-user' ? 'active': ''}>
                <a href="#" data="create-user" onClick={this.handleClick}>
                  Create User
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-10 p-4">
            <div className="row">
              {this.state.component == "articles" ? (
                <ShowAll show="articles" list={this.state.articles} />
              ) : this.state.component == "categories" ? (
                <ShowAll show="categories" list={this.state.categories} />
              ) : this.state.component == "users" ? (
                <ShowAll show="users" list={this.state.users} />
              ) : this.state.component == "create-article" ? (
                <CreateArticle create="article" articles={this.state.articles} categories={this.state.categories} 
                handleNewArticle={this.props.handleNewArticle}
                />
              ) : this.state.component == "create-category" ? (
                <CreateCategory create="category" 
                handleNewCategory={this.props.handleNewCategory}
                />
              ) : (
                <CreateUser create="user" 
                handleNewUser={this.props.handleNewUser}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Admin);
