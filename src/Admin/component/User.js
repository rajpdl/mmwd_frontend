import React, { Component } from 'react'
import { withRouter } from 'react-router';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleEdit() {
        this.props.history.push(`/admin/user/${this.props._id}`)
    }
    render() {
        return (
            <div className="col-12 col-md-6 card">
                <h3 onClick={this.handleEdit} className="pointer">Username: {this.props.username}</h3>
                <div className="card-status">
                    <p>CreatedAt: {this.props.createdAt}</p>
                    <p>EditedAt: {this.props.editedAt}</p>
                </div>
              </div>
        );
    }
}

export default withRouter(User);