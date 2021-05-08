import React, { Component } from "react";
const uuid = require("uuid");

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid.v1(),
      title: "",
      code: "",
      description: "",
      description_in_mm: "",
      categoryId: "",
      title_error: "",
      code_error: "",
      description_error: "",
      description_in_mm_error: "",
      categoryId_error: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }
  handleChange(e) {
    this.setState({ title_error: "" }, () => {
      this.setState({ code_error: "" }, () => {
        this.setState({ description_error: "" }, () => {
          this.setState({ description_in_mm_error: "" }, () => {
            this.setState({ categoryId_error: "" });
          });
        });
      });
    });
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(e.target.value);
    });
  }
  handleCancel() {
    this.setState({ title: "" }, () => {
      this.setState({ code: "" }, () => {
        this.setState({ description: "" }, () => {
          this.setState({ description_in_mm: "" }, () => {
            this.setState({ categoryId: "" });
          });
        });
      });
    });
  }
  handleCreate() {
    if (this.state.title.length < 4) {
      this.setState({ title_error: "Title required ate least 4 characters." });
    }
    if (this.state.code.length < 10) {
      this.setState({ code_error: "Please enter the code." });
    }
    if (this.state.description.length < 10) {
      this.setState({
        description_error: "Description require at least 10 characters.",
      });
    }
    if (this.state.description_in_mm.length < 10) {
      this.setState({
        description_in_mm_error: "အတိုချူပ်ရေးရန် အရေးကြီးသည်.",
      });
    }
    if (!this.state.categoryId) {
      this.setState({ categoryId_error: "Please select one category." });
    }
    if (
      this.state.title.length > 3 &&
      this.state.code.length > 9 &&
      this.state.description.length > 9 &&
      this.state.description_in_mm.length > 9 &&
      this.state.categoryId
    ) {
      console.log("form is ready to submit");
      console.log(this.state);
      this.props.handleNewArticle({
        id: this.state.id,
        title: this.state.title,
        code: this.state.code,
        description: this.state.description,
        description_in_mm: this.state.description_in_mm,
        categoryId: this.state.categoryId,
      });
      alert(`Successfully created the article with "${this.state.title}" title.`);
      this.handleCancel();
    }
  }

  render() {
    return (
      <div className="f-400 m-auto" method="POST">
        <h3>Create New Article</h3>
        <div className="f-group">
          <input
            type="text"
            className="input-field-h p-l-4"
            placeholder="Enter article title..."
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required={true}
          />{" "}
          <br />
          <p className="c-red">{this.state.title_error}</p>
        </div>

        <div className="f-group">
          <textarea
            rows="15"
            className="input-field-h p-l-4"
            placeholder="Please write code..."
            name="code"
            value={this.state.code}
            onChange={this.handleChange}
          ></textarea>
          <p className="c-red">{this.state.code_error} </p>
        </div>

        <div className="f-group">
          <textarea
            rows="5"
            className="input-field-h p-l-4"
            placeholder="Enter description in english..."
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>
          <p className="c-red">{this.state.description_error}</p>
        </div>
        <div className="f-group">
          <textarea
            rows="5"
            className="input-field-h p-l-4"
            placeholder="အတိုချူပ် ရုင်းပြပါ..."
            name="description_in_mm"
            value={this.state.description_in_mm}
            onChange={this.handleChange}
          ></textarea>
          <p className="c-red">{this.state.description_in_mm_error}</p>
        </div>
        <div className="f-group">
          <select
            className="input-field-h p-l-4"
            name="categoryId"
            onChange={this.handleChange}
            value={this.state.categoryId}
          >
            <option>Select one category...</option>
            {this.props.categories.map((category, i) => {
              return (
                <option key={i} value={category._id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <p className="c-red">{this.state.categoryId_error}</p>
        </div>
        <div className="btn-group">
          <button className="btn bg-red" onClick={this.handleCancel}>
            Cancel
          </button>
          <button className="btn bg-green" onClick={this.handleCreate}>
            Create
          </button>
        </div>
      </div>
    );
  }
}

export default Create;
