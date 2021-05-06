import React, { Component } from "react";
import { Redirect, withRouter } from "react-router";

class CategoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: "",
      name_in_mm: "",
      name_error: "",
      name_in_mm_error: "",
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }
  componentDidMount() {
    this.handleCategory();
  }
  handleCategory() {
    let category = this.props.categories.filter(
      (category) => category.id == this.state.id
    )[0];
    this.setState({ name: category.name });
    this.setState({ name_in_mm: category.name_in_mm });
  }
  handleChange(e) {
    this.setState({ name_error: "" }, () => {
      this.setState({ name_in_mm_error: "" });
    });
    this.setState({ [e.target.name]: e.target.value });
  }
  handleCancel() {
    this.handleCategory();
  }
  handleCreate() {
    if (this.state.name.length < 4) {
      this.setState({
        name_error: "Category name require at least 4 characters.",
      });
    }
    if (this.state.name_in_mm.length < 4) {
      this.setState({
        name_in_mm_error: "ကက်တိုကရီက အနည်းဆုံး စာလုံး၄လုံး လိုအပ်တယ် ",
      });
    }

    if (this.state.name.length > 3 && this.state.name_in_mm.length > 3) {
      this.props.handleEditCategory({
        id: this.state.id,
        name: this.state.name,
        name_in_mm: this.state.name_in_mm,
      });
      alert(
        `Successfully updated the category with "${this.state.name}" name.`
      );
      this.handleCancel();
    }
  }
  handleDelete() {
    this.props.handleDeleteCategory(this.state.id);
    this.props.history.push('/admin', {component: 'categories'});
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
                value={this.state.name}
                onChange={this.handleChange}
              />
              <p className="c-red">{this.state.name_error}</p>
            </div>
            <div className="f-group">
              <input
                type="text"
                className="input-field-h p-l-4"
                placeholder="ကက်တိုကရီ အမည် ရေးပါ..."
                name="name_in_mm"
                value={this.state.name_in_mm}
                onChange={this.handleChange}
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
              <button className="btn bg-red" onClick={this.handleCancel}>
                Cancel Changes
              </button>
              <button className="btn bg-green" onClick={this.handleCreate}>
                Save Changes
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
