import React, { Component } from 'react';
import Article from "./Article";
import Prismic from 'prismic-javascript';
import Loader from "./Loader";

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
            api.query(Prismic.Predicates.at('document.type', 'article'), {'fetchLinks': 'author.name'}).then(response => {
                if (response) {
                    console.log(this);
                    this.setState({isLoading: false})
                    this.setState({ doc: response.results });
                }
            });
        });
    }

    render() {

        let articles = this.state.isLoading ? <Loader /> : this.state.doc.map((value) => {
            return <Article article={value} key={value.id}/>
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
