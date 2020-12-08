import React, {Component} from 'react';
import Variables from "../../global/variables";
import {Route, Redirect, Switch} from "react-router-dom";
import Constants from "../../global/constants";
import {Layout, message} from "antd"
import LeftNav from "../../component/left-nav/left-nav";
import Header from "../../component/header/header";
import {GithubOutlined, QqOutlined, MailOutlined} from '@ant-design/icons';
import Home from "../home/home";
import Activity from "../activity/activity";
import Product from "../guide/product";
import Role from "../guide/role";
import User from "../guide/user";
import Monster from "../entity/monster";
import Npc from "../entity/npc";
import Pet from "../entity/pet";
import "./admin.less";

const {Footer, Sider, Content } = Layout;

export default class Admin extends Component {

    render() {
        let user = Variables.user;
        if (!user || !user.name || user.name === "") {
            return <Redirect to={Constants.BASE_URL + "/login"}/>
        } else {
            return (
                <Layout className="admin">
                    <Sider>
                        <LeftNav/>
                    </Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content style={{margin:"20px", backgroundColor: "white"}}>
                            <Switch>
                                <Route path={Constants.BASE_URL + "/home"} component={Home}/>
                                <Route path={Constants.BASE_URL + "/activity"} component={Activity}/>
                                <Route path={Constants.BASE_URL + "/beginner"} component={Product}/>
                                <Route path={Constants.BASE_URL + "/advance"} component={Role}/>
                                <Route path={Constants.BASE_URL + "/plan"} component={User}/>
                                <Route path={Constants.BASE_URL + "/npc"} component={Npc}/>
                                <Route path={Constants.BASE_URL + "/monster"} component={Monster}/>
                                <Route path={Constants.BASE_URL + "/pet"} component={Pet}/>
                                <Route path={Constants.BASE_URL + "/equipment"} component={Pet}/>
                                <Route path={Constants.BASE_URL + "/skill"} component={Pet}/>
                                <Redirect to={Constants.BASE_URL + "/home"}/>
                            </Switch>
                        </Content>
                        <Footer style={{textAlign: "center", color: "#ACACAC"}}>
                            ©2020 A Lion. All rights reserved.&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://github.com/AlionSSS/ago-info" target="_blank"
                               rel="noreferrer"><GithubOutlined/></a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="mailto:alionsss@outlook.com"
                               rel="nofollow"><MailOutlined/></a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a onClick={() => message.info("QQ: 444066154")}><QqOutlined/></a>
                        </Footer>
                    </Layout>
                </Layout>
            );
        }
    }

}