import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Prismic from 'prismic-javascript';
import "./../css/ArticleView.scss";
import Loader from "./Loader";
import {RichText} from 'prismic-reactjs';

class ArticleView extends Component {

    constructor(props){
        super(props);
        this.state = {
            doc: null,
            isLoading: true
        }
    }
    	
    componentWillMount() {
        const apiEndpoint = 'https://barszczredakcja.prismic.io/api/v2';
        
        Prismic.api(apiEndpoint).then(api => {
            api.getByUID('article', this.props.match.params.uid, {'fetchLinks': ['author.name', 'author.image']}).then(document => {
                this.setState({doc: document, isLoading: false});
            });
        });
    }

    render() {
        let article = this.state.isLoading ? <Loader /> : <div className="articleView row m-0">
            <div className="heading">
                <h1>{this.state.doc.data.title[0].text ? this.state.doc.data.title[0].text : ""}</h1>
            </div>
            <div className="col-12 p-0">
                <img className="author-img" src={this.state.doc.data.author.data.image ? this.state.doc.data.author.data.image.mobile.url : ""} alt={this.state.doc.data.author.data.image ? (this.state.doc.data.author.data.image.mobile.alt ? this.state.doc.data.author.data.image.mobile.alt : "") : "" }/>
                <span className="author">{this.state.doc.data.author.data.name[0].text ? this.state.doc.data.author.data.name[0].text : ""}</span>
                <span className="date">{new Date(this.state.doc.last_publication_date).toLocaleDateString()}</span>
            </div>
            <div className="col-12 p-0">
                <span className="imageSource">{this.state.doc.data.image_source[0] ? this.state.doc.data.image_source[0].text : ""}</span>
            </div>
            <div className="col-12 p-0">
                <img className="article-img" src={this.state.doc.data.image.mobile.url ? this.state.doc.data.image.mobile.url : ""} alt={this.state.doc.data.image_desc[0] ? this.state.doc.data.image_desc[0].text : ""} />
            </div>
            <div className="col-12 p-0 content">
                {this.state.doc.data.content ? RichText.render(this.state.doc.data.content) : ""}
            </div>
        </div>
        return (
            <div>
                {article}
            </div>
        );
    }
}

export default withRouter(ArticleView);
