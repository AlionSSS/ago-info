import React, {Component} from 'react';
import Variables from "../../global/variables";
import {Route, Redirect, Switch} from "react-router-dom";
import Constants from "../../global/constants";
import {Layout, message} from "antd"
import LeftNav from "../../component/left-nav/left-nav";
import Header from "../../component/header/header";
import {GithubOutlined, QqOutlined, MailOutlined} from '@ant-design/icons';
import Home from "../home/home";
import Category from "../category/category";
import Product from "../product/product";
import Role from "../role/role";
import User from "../user/user";
import ChartLine from "../chart/chart-line";
import ChartBar from "../chart/chart-bar";
import ChartPie from "../chart/chart-pie";
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
                        <Content style={{backgroundColor: "white"}}>
                            <Switch>
                                <Route path={Constants.BASE_URL + "/home"} component={Home}/>
                                <Route path={Constants.BASE_URL + "/category"} component={Category}/>
                                <Route path={Constants.BASE_URL + "/product"} component={Product}/>
                                <Route path={Constants.BASE_URL + "/role"} component={Role}/>
                                <Route path={Constants.BASE_URL + "/user"} component={User}/>
                                <Route path={Constants.BASE_URL + "/chartBar"} component={ChartBar}/>
                                <Route path={Constants.BASE_URL + "/chartLine"} component={ChartLine}/>
                                <Route path={Constants.BASE_URL + "/chartPie"} component={ChartPie}/>
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