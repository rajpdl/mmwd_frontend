import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleEdit() {
        this.props.history.push(`/admin/category/${this.props.id}`)
    }
    render() {
        return(
            <div className="col-12 col-md-6 card">
                <h3 onClick={this.handleEdit} className="pointer">{this.props.name.toUpperCase()}</h3>
                <h3>{this.props.name_in_mm}</h3>
              </div>
        );
    }
}

export default withRouter(Category);