import React, { Component } from "react";

class Create extends Component {
  render() {
      console.log(this.props);
    
      return (
        <div className="f-400 m-auto">
          <h3>Create New Category</h3>
            <div className="f-group">
                <input type="text" className="input-field-h p-l-4" 
                placeholder="Enter category name..." />                
            </div>
            <div className="f-group">
                <input type="text" className="input-field-h p-l-4"
                placeholder="ကက်တိုကရီ အမည် ရေးပါ..." 
                />
            </div>
            <div className="btn-group">
                <button className="btn bg-red">Cancel</button>
                <button className="btn bg-green">Create</button>
            </div>
        </div>
      );
    
  }
}

export default Create;
