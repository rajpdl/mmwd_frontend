import React, { Component } from "react";
import { Redirect, Route } from "react-router";

class ProtectRoute extends Component {
  render() {
    return this.props.isAdmin ? (
      <Route>
        {
          <this.props.component
            articles={this.props.articles}
            categories={this.props.categories}
            users={this.props.users}
          />
        }
      </Route>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default ProtectRoute;
