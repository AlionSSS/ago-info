import React, {Component} from 'react';
import "./left-nav.less";
import logo from "../../assert/image/logo.ico";
import {Link} from "react-router-dom";
import Constants from "../../global/constants";
import {Menu} from 'antd';
import menuList from "../../global/menu-config";

const {SubMenu} = Menu;

export default class LeftNav extends Component {

    getMenuNodes = (menuList) => {
        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={Constants.BASE_URL + item.key}>{item.title}</Link>
                    </Menu.Item>
                );
            } else {
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                );
            }
        });
    }

    render() {
        return (
            <div className="left-nav">
                <Link to={Constants.BASE_URL} className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>AGO - Info</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={['/home']}
                    defaultOpenKeys={['/strategy', '/entity']}
                    mode="inline"
                    theme="dark"
                >
                    {this.getMenuNodes(menuList)}
                </Menu>
            </div>
        );
    }

}