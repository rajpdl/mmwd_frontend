import React, { Component } from "react";

class Create extends Component {
  render() {
      return (
          <div className="f-400 m-auto">
              <h3>Create New User</h3>
              <div className="f-group">
                  <input type="text" 
                  className="input-field-h p-l-4"
                  placeholder="Enter username" />
              </div>
              <div className="f-group">
                  <input type="password" 
                  className="input-field-h p-l-4"
                  placeholder="Enter password"
                  />
              </div>
              <div className="f-group">
                  <input type="password"
                  className="input-field-h p-l-4"
                  placeholder="Confirm password again..."
                  />
              </div>
              <div className="btn-group">
                  <button className="btn bg-red">Cancel</button>
                  <button className="btn bg-green">Create</button>
              </div>
          </div>
      )
  }
}

export default Create;
