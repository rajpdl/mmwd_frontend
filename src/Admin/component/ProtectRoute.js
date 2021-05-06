import React, { Component } from "react";
import { Redirect, Route } from "react-router";

class ProtectRoute extends Component {
  render() {
    return this.props.isAdmin ? (
      <Route exact >
        {
          <this.props.component
            articles={this.props.articles}
            categories={this.props.categories}
            users={this.props.users}
            handleNewArticle={this.props.handleNewArticle}
            handleNewCategory={this.props.handleNewCategory}
            handleNewUser={this.props.handleNewUser}
          />
        }
      </Route>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default ProtectRoute;
