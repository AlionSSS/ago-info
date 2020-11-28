import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import "./header.less";
import DateUtils from "../../util/date-utils"
import Variables from "../../global/variables";
import menuList from "../../global/menu-config";
import  {Button,Modal} from "antd";
import Constants from "../../global/constants";
import StorageUtils from "../../util/storage-utils";
import LinkButton from "../link-button/link-button";

class Header extends Component {

    state = {
        currentTime: DateUtils.formatDate(Date.now()),
        dayPictureUrl: "http://api.map.baidu.com/images/weather/day/qing.png",
        weather: "晴"
    }

    getTime = () => {
        this.intervalId = setInterval(() => {
            const currentTime = DateUtils.formatDate(Date.now());
            this.setState({currentTime: currentTime});
        }, 1000);
    }

    getWeather = async () => {
        await (
            this.setState({
                dayPictureUrl: "http://api.map.baidu.com/images/weather/day/qing.png",
                weather: "晴"
            })
        );
    }

    getTitle = () => {
        const path = this.props.location.pathname;
        let title = "";
        menuList.forEach(item => {
            if (path.endsWith(item.key)) {
                title = item.title;
            } else if ((item.children)) {
                let cItem = item.children.find(cItem => path.endsWith(cItem.key));
                if (cItem) {
                    title = cItem.title;
                }
            }
        });

        return title;
    }

    logout = () => {
        Modal.confirm({
            title: "提示",
            content: "确定要退出吗？",
            onOk: () => {
                console.log("ok", this);
                // 删除保存的user数据
                StorageUtils.removeUser();
                Variables.user = {};
                // 跳转到login界面
                this.props.history.replace(Constants.BASE_URL + "login");
            }
        });
    }

    componentDidMount() {
        this.getTime();
        this.getWeather();
    }

    componentWillUnmount() {
        // clearInterval(this.intervalId);
    }

    render() {
        const {currentTime, dayPictureUrl, weather} = this.state;
        const userName = Variables.user.name;
        const title = this.getTitle();
        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎，{userName}</span>
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                    {/*<Button type="link" onClick={this.logout}>退出</Button>*/}
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <img src={dayPictureUrl} alt=""/>
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(Header);