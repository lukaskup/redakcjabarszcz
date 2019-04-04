import React, { Component } from 'react';
import Article from "./Article";
import Prismic from 'prismic-javascript';
import {Link, RichText, Date} from 'prismic-reactjs';

class Articles extends Component {

    constructor(props){
        super(props);
        this.state = {
            doc: [],
            isLoading: true
        }
    }

    	
    componentWillMount() {
        const apiEndpoint = 'https://barszczredakcja.prismic.io/api/v2';
        
        Prismic.api(apiEndpoint).then(api => {
            api.query(Prismic.Predicates.at('document.type', 'article', {'fetchLinks': 'author.name'})).then(response => {
                if (response) {
                    this.setState({isLoading: false})
                    this.setState({ doc: response.results });
                }
            });
        });
    }

    render() {

        let articles = this.state.isLoading ? <span>loading...</span> : this.state.doc.map((value) => {
            return <Article article={value} />
        })

        return (
        <div className="articles">
            <div className="heading">
                <h1>Artykuły</h1>
            </div>
            <div className="articlesList">
                {articles}
            </div>
        </div>
        );
    }
}

export default Articles;
