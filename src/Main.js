import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./User/component/Navigation";
import Home from "./User/component/Home";
import Detail from "./User/pages/Detail";
import NoMatch from "./User/pages/NoMatch";
import ProtectRoute from "./Admin/component/ProtectRoute";
import Admin from "./Admin/pages/Admin";
import Login from "./Admin/pages/Login";
import ArticleDetail from "./Admin/pages/ArticleDetail";
import CategoryDetail from "./Admin/pages/CategoryDetail";
import UserDetail from "./Admin/pages/UserDetail";

import GetAllArticles from "./utils/article/GetAllArticles";
import GetAllCategories from "./utils/category/GetAllCategories";
import GetAllUsers from "./utils/user/GetAllUsers";
import CreateCategory from "./utils/category/CreateCategory";
import DeleteCategory from "./utils/category/DeleteCategory";
import CreateArticle from "./utils/article/CreateArticle";
import DeleteArticle from "./utils/article/DeleteArticle";
import CreateUser from "./utils/user/CreateUser";
import DeleteUser from "./utils/user/DeleteUser";
import UpdateUser from "./utils/user/UpdateUser";
import UpdateArticle from "./utils/article/UpdateArticle";
import Loading from "./User/component/Loading";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      language: "EN",
      isAdmin: false,
      users: [],
      allArticles: [],
      newArticles: [],
      featuredArticles: [],
      isLoading: true,
    };
    this.handleChangeLanugage = this.handleChangeLanugage.bind(this);
    this.handleNewArticle = this.handleNewArticle.bind(this);
    this.handleEditArticle = this.handleEditArticle.bind(this);
    this.handleDeleteArticle = this.handleDeleteArticle.bind(this);
    this.handleNewCategory = this.handleNewCategory.bind(this);
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
    this.handleEditUser = this.handleEditUser.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  async componentDidMount() {
    let error = false;
    const articles = await GetAllArticles();
    if (articles.error) {
      error = true;
    }
    const categories = await GetAllCategories();
    if (categories.error) {
      error = true;
    }
    const users = await GetAllUsers();
    if (users.error) {
      error = true;
    }
    if (!error) {
      this.setState({ links: categories });
      this.setState({ allArticles: articles }, () => {
        let featuredArticles = this.state.allArticles.filter(
          (article) => article.isFeatured == true
        );
        this.setState({ featuredArticles });
        let newArticles = this.state.allArticles.filter((article) => {
          return Date.now() < Date.parse(article.createdAt) + 172800000;
        });
        this.setState({ newArticles });
      });
      this.setState({ users });
      this.setState({ isLoading: false });
    } else {
    }
  }
  handleChangeLanugage(language) {
    this.setState({ language });
  }
  handleLogin() {
    this.setState({ isAdmin: true });
  }
  handleLogout() {
    this.setState({ isAdmin: false });
  }
  async handleNewArticle(article) {
    console.log(article.categoryId);
    const result = await CreateArticle(article);
    if (result.error) {
    } else {
      let articles = this.state.allArticles;
      articles.push(result);
      this.setState({ articles }, () => {
        console.log(this.state.allArticles);
      });
    }
  }
  async handleEditArticle(article) {
    const result = await UpdateArticle(article);
    if (result.error) {
    } else {
      let oldArticle = this.state.allArticles.filter((result, i) => {
        return result._id == article._id;
      })[0];
      oldArticle.title = result.title;
      oldArticle.description = result.description;
      oldArticle.description_in_mm = result.description_in_mm;
      oldArticle.code = result.code;
      oldArticle.categoryId = result.categoryId;
      oldArticle.isFeatured = result.isFeatured;
      oldArticle.editedAt = result.editedAt;

      let articles = this.state.allArticles.filter((result) => {
        return result._id != article._id;
      });
      articles.push(oldArticle);
      this.setState({ allArticles: articles }, () => {
        console.log(this.state.allArticles);
      });
    }
  }
  async handleDeleteArticle(id) {
    const result = await DeleteArticle(id);
    if (result.error) {
    } else {
      let articles = this.state.allArticles.filter(
        (article) => article._id != id
      );
      this.setState({ allArticles: articles }, () => {
        console.log(this.state.allArticles);
        console.log("it is deleted.");
      });
    }
  }
  async handleNewCategory(category) {
    const result = await CreateCategory(category);
    if (result.error) {
    } else {
      let categories = this.state.links;
      categories.push(result);
      this.setState({ links: categories }, () => {
        console.log(this.state.links);
      });
    }
  }

  async handleDeleteCategory(id) {
    const result = await DeleteCategory(id);
    if (result.error) {
    } else {
      let categories = this.state.links.filter(
        (category) => category._id != id
      );
      this.setState({ links: categories }, () => {
        console.log(this.state.links);
      });
    }
  }
  async handleNewUser(user) {
    const result = await CreateUser(user);
    if (result.error) {
    } else {
      let users = this.state.users;
      users.push(result);
      this.setState({ users });
    }
  }
  async handleEditUser(user) {
    const result = await UpdateUser(user);
    if (result.error) {
    } else {
      let oldUser = this.state.users.filter(
        (result) => result._id == user._id
      )[0];
      oldUser.password = result.password;
      oldUser.editedAt = result.editedAt;
      let users = this.state.users.filter((result) => result._id != user._id);
      users.push(oldUser);
      this.setState({ users }, () => {
        console.log(this.state.users);
      });
    }
  }
  async handleDeleteUser(id) {
    const result = await DeleteUser(id);
    console.log(id);
    if (result.error) {
    } else {
      let users = this.state.users.filter((user) => user._id != id);
      this.setState({ users }, () => {
        console.log(this.state.users);
      });
    }
  }
  render() {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      return (
        <Router>
          <Navigation
            handleLogout={this.handleLogout}
            isAdmin={this.state.isAdmin}
            links={this.state.links}
            language={this.state.language}
            handleChangeLanugage={this.handleChangeLanugage}
          />
          <Switch>
            /* Visitors Routes Start */
            <Route path="/" exact>
              <Home
                isAdmin={this.state.isAdmin}
                language={this.state.language}
                allArticles={this.state.allArticles}
                newArticles={this.state.newArticles}
                featuredArticles={this.state.featuredArticles}
              />
            </Route>
            {this.state.links.map((link, i) => {
              return (
                <Route key={i} path={"/" + link._id}>
                  <Home
                    isAdmin={this.state.isAdmin}
                    category={link}
                    allArticles={this.state.allArticles}
                    language={this.state.language}
                  />
                </Route>
              );
            })}
            <Route path="/detail/:id">
              <Detail
                articles={this.state.allArticles}
                language={this.state.language}
              />
            </Route>
            /* Visitors Routes End */ /* Admin Routes Start */
            <Route path="/admin/article/:id" exact>
              <ArticleDetail
                isAdmin={this.state.isAdmin}
                articles={this.state.allArticles}
                categories={this.state.links}
                handleEditArticle={this.handleEditArticle}
                handleDeleteArticle={this.handleDeleteArticle}
              />
            </Route>
            <Route path="/admin/category/:id" exact>
              <CategoryDetail
                isAdmin={this.state.isAdmin}
                categories={this.state.links}
                handleEditCategory={this.handleEditCategory}
                handleDeleteCategory={this.handleDeleteCategory}
              />
            </Route>
            <Route path="/admin/user/:id" exact>
              <UserDetail
                isAdmin={this.state.isAdmin}
                users={this.state.users}
                handleEditUser={this.handleEditUser}
                handleDeleteUser={this.handleDeleteUser}
              />
            </Route>
            <Route path="/login">
              <Login handleLogin={this.handleLogin} users={this.state.users} />
            </Route>
            <ProtectRoute
              path="/admin"
              isAdmin={this.state.isAdmin}
              component={Admin}
              categories={this.state.links}
              articles={this.state.allArticles}
              users={this.state.users}
              handleNewArticle={this.handleNewArticle}
              handleNewCategory={this.handleNewCategory}
              handleNewUser={this.handleNewUser}
            />
            /* Admin Routes Start */
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      );
    }
  }
}

export default Main;
