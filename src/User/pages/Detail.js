import React, { Component } from 'react'
import { withRouter } from 'react-router';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            articles: this.props.articles,
            article: {}
        }
        this.handleBack = this.handleBack.bind(this);
    }
    handleBack() {
        this.props.history.goBack();
    }
    componentDidMount() {
        let article = this.state.articles.filter((article, i) => {
            return article.id == this.state.id
        });
        this.setState({article: article[0]});
    }
    render() {
        return(
            <div className="container m-t-4">
                <div className="row">
                    <div className="col-12 card">
                        <h2>{this.state.article.title}</h2>
                        <div className="card-body">
                            <p>{this.props.language == 'EN'? this.state.article.description : this.state.article.description_in_mm}</p>
                        </div>
                        <div className="card-code">
                            {this.state.article.code}
                        </div>
                    </div>
                </div>                
                <button className="btn bg-red" onClick={this.handleBack}>Back</button>
            </div>
        )
    }
}

export default withRouter(Detail);