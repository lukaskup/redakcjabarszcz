import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./../css/Article.scss";
class Article extends Component {
  render() {
    return (
      <div className="article row m-0" key={this.props.article.uid} onClick={() => {this.props.history.push("/artykul/" + this.props.article.uid)}}>
        <div className="col-12 p-0">
            <img src={this.props.article.data.image.mobile.url} alt="zdjecie artykulu" />
        </div>
        <div className="col-12 p-0">
            <p className="title">{this.props.article.data.title[0].text}</p>
        </div>
        <div className="col-12 p-0">
            <p className="description">{this.props.article.data.content[0].text.length > 150 ? (this.props.article.data.content[0].text.substr(0, 110) + "...") : this.props.article.data.content[0].text.length}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Article);
