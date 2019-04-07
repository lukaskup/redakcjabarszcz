import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import "./../css/About.scss";
import Loader from "./Loader";

class About extends Component {

  constructor(props){
      super(props);
      this.state = {
          authors: [],
          isLoading: true
      }
  }
  
  componentWillMount() {
      const apiEndpoint = 'https://barszczredakcja.prismic.io/api/v2';
      
      Prismic.api(apiEndpoint).then(api => {
          api.query(Prismic.Predicates.at('document.type', 'author')).then(response => {
              if (response) {
                  this.setState({isLoading: false})
                  this.setState({ authors: response.results });
                  console.log(this.state.authors);
              }
          });
      });
  }

  render() {

    let authors =  this.state.isLoading ? <Loader /> : this.state.authors.map((author) => {
      return <div className="author">
        <div className="img">
          <img src={author.data.image.mobile.url} alt="" />
        </div>
        <div className="info">
          <span className="name">{author.data.name[0].text}</span>
          <span className="desc">{author.data.desc[0].text}</span>
        </div>
      </div>
    });

    return (
      <div className="about row m-0">
        <div className="col-12 p-0">
          <div className="heading">
            <h1>Kilka słów o redakcji</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div clasName="col-12 p-0 authorsList">
          <div className="heading">
            <h1>Autorzy</h1>
          </div>
          {authors}
        </div>
      </div>
    );
  }
}

export default About;
