import React, { Component } from "react";
import { Redirect, withRouter } from "react-router";

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.match.params.id,
      title: "",
      code: "",
      description: "",
      description_in_mm: "",
      categoryId: "",
      isFeatured: false,
      title_error: "",
      code_error: "",
      description_error: "",
      description_in_mm_error: "",
      categoryId_error: "",
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleArticle = this.handleArticle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.handleArticle();
  }
  handleArticle() {
    if (this.props.articles.length > 0) {
      let article = this.props.articles.filter(
        (article) => article._id == this.state._id
      )[0];
      this.setState({ title: article.title });
      this.setState({ code: article.code });
      this.setState({ description: article.description });
      this.setState({ description_in_mm: article.description_in_mm });
      this.setState({ categoryId: article.categoryId });
      this.setState({ isFeatured: article.isFeatured });
    }
  }
  handleBack() {
    this.props.history.push("/admin", { component: "articles" });
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
    const name = e.target.name,
      value = e.target.value;
    console.log(name, value);
    if (name == 'Featured' && value == "on") {
      this.setState({ isFeatured: true });
    }else if (name == 'notFeatured' && value == "on") {
      this.setState({ isFeatured: false });
    }else{
      this.setState({ [name]: value });
    }
  }

  handleCancel() {
    this.handleArticle();
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
      this.props.handleEditArticle({
        _id: this.state._id,
        title: this.state.title,
        code: this.state.code,
        description: this.state.description,
        description_in_mm: this.state.description_in_mm,
        categoryId: this.state.categoryId,
        isFeatured: this.state.isFeatured
      });
      alert(
        `Successfully updated the article with "${this.state.title}" title.`
      );
    }
  }
  handleDelete() {
    const result = window.confirm(
      `Are you sure you want to delete "${this.state.title}" Article?`
    );
    if (result) {
      this.props.handleDeleteArticle(this.state._id);
      this.props.history.push("/admin", { component: "articles" });
    } else {
      console.log(result);
    }
  }
  handleFocus(e) {
    this.setState({ title_error: "You cannot change the title." });
  }
  render() {
    console.log(this.state.isFeatured);
    if (this.props.isAdmin) {
      return (
        <div className="container">
          <div className="f-400 m-auto" method="POST">
            <h3>Create New Article</h3>
            <div className="f-group">
              <input
                type="text"
                className="input-field-h p-l-4"
                placeholder="Enter article title..."
                name="title"
                defaultValue={this.state.title}
                onFocus={this.handleFocus}
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
              <input
                type="radio"
                name="Featured"
                checked={this.state.isFeatured ? true : false}
                onChange={this.handleChange}
              />{" "}
              Featured
              <input
                type="radio"
                name="notFeatured"
                checked={!this.state.isFeatured ? true : false}
                onChange={this.handleChange}
              />{" "}
              Not Featured
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
export default withRouter(ArticleDetail);
