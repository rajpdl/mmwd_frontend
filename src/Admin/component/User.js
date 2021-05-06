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
        this.props.history.push(`/admin/user/${this.props.id}`)
    }
    render() {
        return (
            <div className="col-12 col-md-6 card">
                <h3 onClick={this.handleEdit} className="pointer">{this.props.username}</h3>
              </div>
        );
    }
}

export default withRouter(User);