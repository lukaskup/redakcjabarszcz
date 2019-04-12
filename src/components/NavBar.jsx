import React, { Component } from 'react';
import './../css/NavBar.scss';
import logo from "./../assets/logo.jpg";
import { withRouter } from 'react-router-dom';

class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            isMenuDrawerOpen: false
        }

        this.toggleMenuDrawer.bind(this);
        this.handleLinkClick.bind(this);
    }

    toggleMenuDrawer(){
        this.setState({isMenuDrawerOpen: !this.state.isMenuDrawerOpen});
    }

    handleLinkClick(route){
        this.toggleMenuDrawer();
        this.props.history.push(route);
    }

    render() {
        return (
        <div className="NavBar">
            <i className="material-icons" onClick={() => this.toggleMenuDrawer()}>
                menu
            </i>
            <img src={logo} alt="redakcja Barszcz logo"/>
            
            <div className={"menuDrawer" + (this.state.isMenuDrawerOpen ? "" : " hidden")}>
                <div className="row drawerItem" onClick={() => this.toggleMenuDrawer()}>
                    <div className="col-12">
                        <i className="material-icons">
                            arrow_back
                        </i>
                    </div>
                </div>
                <div className="row drawerItem m-0" onClick={() => this.handleLinkClick("/")}>
                    <div className="col-12">
                        <a href="/" onClick={(e) => {e.preventDefault()}}>Strona główna</a>
                    </div>
                </div>
                <div className="row drawerItem m-0" onClick={() => this.handleLinkClick("/o-nas")}>
                    <div className="col-12">
                        <a href="/o-nas" onClick={(e) => {e.preventDefault()}}>O nas</a>
                    </div>
                </div>
                <div className="row drawerItem m-0" onClick={() => this.handleLinkClick("/kontakt")}>
                    <div className="col-12">
                        <a href="/kontakt" onClick={(e) => {e.preventDefault()}}>Kontakt</a>
                    </div>
                </div>
            </div>
            <div className={"drawerBackground" + (this.state.isMenuDrawerOpen ? "" : " hidden")} onClick={() => this.toggleMenuDrawer()}/>
        </div>
        );
    }
}

export default withRouter(NavBar);
