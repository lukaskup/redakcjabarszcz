import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./../css/Article.scss";

class Article extends Component {
  render() {
    return (
      <div className="article row m-0" key={this.props.article.uid} onClick={()=> {this.props.history.push("/artykul/" + this.props.article.uid)}}>
        <div className="hidden-desktop">
          <div className="col-12 p-0">
            {this.props.article.data.image.mobile.url ? <span className="imageSource">{this.props.article.data.image_source[0]
              ? this.props.article.data.image_source[0].text : ""}</span> : ""}
          </div>

          <div className="col-12 p-0">
            {this.props.article.data.image.mobile.url ?
            <img src={this.props.article.data.image.mobile.url ? this.props.article.data.image.mobile.url : "" }
              alt={this.props.article.data.image_desc[0] ? this.props.article.data.image_desc[0].text : "" } /> : ""}
          </div>

          <div className="col-12 p-0">
            <span className="title">{this.props.article.data.title[0] ? this.props.article.data.title[0].text : ""}</span>
          </div>

          <div className="col-12 p-0">
            <p className="description">{this.props.article.data.content[0] ? (this.props.article.data.content[0].text.length >
              150 ? (this.props.article.data.content[0].text.substr(0, 110) + "...") :
              this.props.article.data.content[0].text) : ""}</p>
          </div>

          <div className="col-12 p-0">
            <span className="author">{this.props.article.data.author.data.name[0] ?
              this.props.article.data.author.data.name[0].text : ""}</span>
            <span className="date">{new Date(this.props.article.last_publication_date).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="hidden-mobile desktop">
          <div className="col-12 p-0">
            {this.props.article.data.image.mobile.url ? <span className="imageSource">{this.props.article.data.image_source[0]
              ? this.props.article.data.image_source[0].text : ""}</span> : ""}
          </div>
          
          <div className="row m-0">
            <div className="col-8 p-0">
                <div className="col-12 p-0">
                  <span className="title">{this.props.article.data.title[0] ? this.props.article.data.title[0].text : ""}</span>
                </div>
                <div className="col-12 p-0">
                  <p className="description">{this.props.article.data.content[0] ? (this.props.article.data.content[0].text.length >
                    150 ? (this.props.article.data.content[0].text.substr(0, 110) + "...") :
                    this.props.article.data.content[0].text) : ""}</p>
                </div>
            </div>
            <div className="col-4 p-0">
              {this.props.article.data.image.mobile.url ?
              <img src={this.props.article.data.image.mobile.url ? this.props.article.data.image.mobile.url : "" }
                alt={this.props.article.data.image_desc[0] ? this.props.article.data.image_desc[0].text : "" } /> : ""}
            </div>
          </div>
          <div className="col-12 p-0">
            <span className="author">{this.props.article.data.author.data.name[0] ?
              this.props.article.data.author.data.name[0].text : ""}</span>
            <span className="date">{new Date(this.props.article.last_publication_date).toLocaleDateString()}</span>
          </div>
        </div>

      </div>
      );
  }
}

export default withRouter(Article);