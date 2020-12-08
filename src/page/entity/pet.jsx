import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import PetHome from "./pet-home";
import PetAddUpdate from "./pet-add-update";
import Detail from "./detail";
import Constants from "../../global/constants";

export default class Pet extends Component {

    render() {
        return (
            <Switch>
                {/*exact 设置为完全路径匹配*/}
                <Route path={Constants.BASE_URL + "/pet"} component={PetHome} exact/>
                <Route path={Constants.BASE_URL + "/pet/addupdate"} component={PetAddUpdate}/>
                <Route path={Constants.BASE_URL + "/pet/detail"} component={Detail}/>
                <Redirect to={Constants.BASE_URL + "/pet"}/>
            </Switch>
        );
    }

}