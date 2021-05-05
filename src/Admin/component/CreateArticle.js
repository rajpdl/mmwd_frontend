import React, { Component } from "react";

class Create extends Component {
  render() {
    return (
      <div className="f-400 m-auto">
        <h3>Create New Article</h3>
        <div className="f-group">
          <input
            type="text"
            className="input-field-h p-l-4"
            placeholder="Enter article title..."
          />
        </div>
        <div className="f-group">
          <textarea
            rows="15"
            className="input-field-h p-l-4"
            placeholder="Please write code..."
          ></textarea>
        </div>
        <div className="f-group">
          <textarea
            rows="5"
            className="input-field-h p-l-4"
            placeholder="Enter description in english..."
          ></textarea>
        </div>
        <div className="f-group">
            <textarea
            rows="5"
            className="input-field-h p-l-4"
            placeholder="အတိုချူပ် ရုင်းပြပါ..."
            >
            </textarea>
        </div>
        <div className='f-group'>
            <select className="input-field-h p-l-4">
                <option>Select one category...</option>
                {this.props.categories.map((category, i) => {
                    return <option key={i} value={category.id}>{category.name}</option>
                })}
            </select>
        </div>
        <div className='btn-group'>
            <button className="btn bg-red">Cancel</button>
            <button className="btn bg-green">Create</button>
        </div>
      </div>
    );
  }
}

export default Create;
