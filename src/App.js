import './App.less';
import React, {Component} from 'react';
import {Redirect, BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./page/login/login";
import Admin from "./page/admin/admin";
import Constants from "./global/constants";

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={Constants.BASE_URL + "/login"} component={Login}/>
                    <Route path={Constants.BASE_URL} component={Admin}/>
                    <Redirect to={Constants.BASE_URL}/>
                </Switch>
            </BrowserRouter>
        );
    }

}
