import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Article extends Component {
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
                <h3 className="card-title" onClick={this.handleEdit}>{this.props.title}</h3>
                <div className="card-body">
                  <p>{this.props.description}</p>
                </div>
              </div>
        );
    }
}

export default Article;