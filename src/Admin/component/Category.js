import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleEdit() {
        
    }
    render() {
        return(
            <div className="col-12 col-sm-6 col-md-4 card">
                <h3 onClick={this.handleEdit} className="pointer">{this.props.name.toUpperCase()}</h3>
                <h3>{this.props.name_in_mm}</h3>
              </div>
        );
    }
}

export default Category;