import React, { Component } from "react";
import Header from "./Navbarn"
import Cardpowder from "./Card"
import Cardcapsule from "./Cardc"
import "../css/styles.css";
import { POWDER } from "../inventory/powder"
import { CAPSULE } from "../inventory/capsules"
import Footer from './Footer';
import Home from './Home';
import Contact from "./Contactus"
import { Switch, Route, Redirect } from 'react-router-dom';
import CompCar from './Carousel'


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            powders: POWDER,
      
            capsules: CAPSULE
           };
    }


    

    render() {

     

        return (
            <div className="App">
                <Header />
                <Switch>
                   
                    <Route exact path="/home" render={() => <Home powders={this.state.powders} />} />
                    <Route exact path="/powder" render={() => <Cardpowder powders={this.state.powders} /> } />
                    <Route exact path="/capsules" render={() => <Cardcapsule capsules={this.state.capsules} />} />
                    <Route exact path="/contact" render={() => <Contact />} />
                    <Redirect to="/home" />
                </Switch>
                <CompCar />
                <Footer />
            </div>
        );
    }
}

export default Main;
