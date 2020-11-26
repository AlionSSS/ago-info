import React, {Component} from 'react';
import "./left-nav.less";
import logo from "../../assert/image/logo.ico";
import {Link, withRouter} from "react-router-dom";
import Constants from "../../global/constants";
import {Menu} from 'antd';
import menuList from "../../global/menu-config";

const {SubMenu} = Menu;

class LeftNav extends Component {

    getMenuNodes = (parentKey, menuList) => {
        return menuList.map(item => {
            if (!item.children) {
                if (this.path.endsWith(item.key)) {
                    // this.openKeys = parentKey;
                    this.openKey = parentKey;
                    // console.log(item.key + " | " + this.path + " | " + this.openKeys);
                }
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={Constants.BASE_URL + item.key}>{item.title}</Link>
                    </Menu.Item>
                );
            } else {
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {this.getMenuNodes(item.key, item.children)}
                    </SubMenu>
                );
            }
        });
    }

    UNSAFE_componentWillMount() {
        this.path = this.props.location.pathname;
        this.menuNodes = this.getMenuNodes(Constants.BASE_URL, menuList);
    }

    render() {
        const path = this.props.location.pathname;
        const openKey = this.openKey;

        return (
            <div className="left-nav">
                <Link to={Constants.BASE_URL} className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>AGO - Info</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={path}
                    selectedKeys={path}
                    // defaultOpenKeys={[openKey]}
                    defaultOpenKeys={['/strategy', '/entity']}
                    mode="inline"
                    theme="dark"
                >
                    {this.menuNodes}
                </Menu>
            </div>
        );
    }

}

export default withRouter(LeftNav);