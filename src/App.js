import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";
import ArticleView from "./components/ArticleView";
import About from "./components/About";
import Contact from "./components/Contact";
import { HashRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <NavBar />
            <div className="container p-0">
              <Route exact path="/" component={Articles} />
              <Route exact path="/o-nas" component={About} />
              <Route exact path="/kontakt" component={Contact} />
              <Route exact path="/artykul/:uid" component={ArticleView} />
            </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
