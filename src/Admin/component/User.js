import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleEdit() {
        
    }
    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 card">
                <h3 onClick={this.handleEdit}>{this.props.username}</h3>
              </div>
        );
    }
}

export default User;