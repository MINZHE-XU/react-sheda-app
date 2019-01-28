import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import FAQ from "./FAQ";
import Contact from "./Contact";
import './App.css';
import Script from 'react-load-script'

class App extends Component {
    componentDidMount() {
        const localScript=["js/jquery.min.js",
            "js/bootstrap.min.js",
            "js/bootsnav.js",
            "js/jquery.easing-1.3.min.js",
            "js/respond.min.js" ];
        for (let i=0; i<localScript.length;i++ ){
            let script = document.createElement("script");
            script.src = localScript[i];
            script.type = 'text/jsx';
            document.body.appendChild(script);
        }
    }

    render() {
        return (
            <HashRouter>
                <div className="wrap-sticky" style={{height: 80}}>
                    <nav className="navbar navbar-inverse navbar-sticky bootsnav on no-full">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse"
                                        data-target="#navbar-menu">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <NavLink to="/"><img src="img/lightning-icon.png" className="logo" alt=" " /></NavLink>
                            </div>
                            <div className="collapse navbar-collapse" id="navbar-menu">
                                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li><NavLink to="/faq">FAQ</NavLink></li>
                                    <li><NavLink to="/about">About Us</NavLink></li>
                                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                                </ul>
                                <div className="content">
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/about" component={About}/>
                                    <Route path="/faq" component={FAQ}/>
                                    <Route path="/contact" component={Contact}/>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Script
                        url="js/bootstrap.min.js"
                        onCreate={this.handleScriptCreate.bind(this)}
                        onError={this.handleScriptError.bind(this)}
                        onLoad={this.handleScriptLoad.bind(this)}
                    />
                </div>
            </HashRouter>
        );
    }
    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }

    handleScriptError() {
        this.setState({ scriptError: true })
    }

    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
    }
}

export default App;