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
          Barszcz został stworzony przez dwie klasy humanistyczne. Inicjatywę kultywowania tradycji gazetki szkolnej w Królówce zaproponowała pani Małgorzata Kotarska. Mamy nadzieje, ze społeczność naszego liceum aktywnie włączy się w tworzenie „Barszczu” oraz że wszystkie osoby zainteresowane dziennikarstwem, ogolnie pojętym pisaniem oraz sztuka znajdą u nas swoje spokojne  miejsce, w którym rozwinął swoją pasję
          </p>
        </div>
        <div className="col-12 p-0 authorsList">
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
