import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Article extends Component {
    render() {
        return(
            <div className="col-12 col-sm-6 col-md-4 card">
                <h2 className="card-title">{this.props.title}</h2>
                <div className="card-body">
                  <p>{this.props.language == 'EN'? this.props.description : this.props.description_in_mm}</p>
                  <button className="btn m-t-4"><Link to={`/detail/${this.props.id}`}> Read More </Link></button>
                </div>
              </div>
        );
    }
}

export default Article;