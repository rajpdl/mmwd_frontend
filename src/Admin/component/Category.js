import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit() {
    this.props.history.push(`/admin/category/${this.props._id}`);
  }
  render() {
    return (
      <div className="col-12 col-md-6 card">
        <h3 onClick={this.handleEdit} className="pointer">
          Name: {this.props.name.toUpperCase()}
        </h3>
        <h3>Name In MM: {this.props.name_in_mm}</h3>
        <div className="card-status">
          <p>CreatedAt: {this.props.createdAt}</p>
          <p>EditedAt: {this.props.editedAt} </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Category);
