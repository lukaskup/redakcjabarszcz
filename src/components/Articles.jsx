import React, { Component } from 'react';
import Article from "./Article";

class Articles extends Component {
  render() {
    return (
      <div className="articles">
        <div className="heading">
            <h1>Artykuły</h1>
        </div>
        <div className="articlesList">
            <Article />
        </div>
      </div>
    );
  }
}

export default Articles;
