import React, { Component } from "react";
import { Redirect, withRouter } from "react-router";

class CategoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.match.params.id,
      name: "",
      name_in_mm: "",
      name_error: "",
      name_in_mm_error: "",
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.handleCategory();
  }
  handleCategory() {
    if(this.props.categories.length > 0) {
      let category = this.props.categories.filter(
        (category) => category._id == this.state._id
      )[0];
      console.log(category);
      this.setState({ name: category.name });
      this.setState({ name_in_mm: category.name_in_mm });
    }
    
  }

  handleDelete() {
    const result = window.confirm(
      `Are you sure you want to delete "${this.state.name}" category?`
    );
    if(result) {
      this.props.handleDeleteCategory(this.state._id);
    this.props.history.push('/admin', {component: 'categories'});
    }else {
      console.log(result);
    }
    
  }
  handleBack() {
    this.props.history.push("/admin", { component: "categories" });
  }
  render() {
    if (this.props.isAdmin) {
      return (
        <div className="container">
          <div className="f-400 m-auto">
            <h3>Create New Category</h3>
            <div className="f-group">
              <input
                type="text"
                className="input-field-h p-l-4"
                placeholder="Enter category name..."
                name="name"
                defaultValue={this.state.name}
              />
              <p className="c-red">{this.state.name_error}</p>
            </div>
            <div className="f-group">
              <input
                type="text"
                className="input-field-h p-l-4"
                placeholder="ကက်တိုကရီ အမည် ရေးပါ..."
                name="name_in_mm"
                defaultValue={this.state.name_in_mm}
              />
              <p className="c-red">{this.state.name_in_mm_error}</p>
            </div>
            <div className="btn-group">
              <button className="btn bg-red" onClick={this.handleBack}>
                Back
              </button>
              <button className="btn bg-red" onClick={this.handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
export default withRouter(CategoryDetail);
