import React, {Component} from 'react';

import "./login.less";
import logo from "../../assert/image/logo.ico"
import {Spin, Form, Input, Button, Checkbox, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {reqLogin} from "../../api";

import Constants from "../../global/constants";
import Variables from "../../global/variables";
import StorageUtils from "../../util/storage-utils";
import {Redirect} from "react-router-dom";

export default class Login extends Component {

    state = {loading: false};

    onFinish = (values) => {
        console.log('Received values of form: ', values);
        this.setState({loading: true});

        // 异步
        reqLogin(
            values.username, values.password
        ).then(response => {
            console.log("成功", response);
            let result = response.data;
            if (result.status === 0) {
                message.success("登录成功");

                Variables.user = {name: result.name};
                StorageUtils.saveUser({name: result.name});

                //  跳转到 Admin页面
                this.props.history.replace(Constants.BASE_URL);
                console.log(Variables.user);
            } else {
                // 服务端返回的错误信息
                message.error(result.message);
            }

            this.setState({loading: false});
        });
    };

    render() {
        let user = Variables.user;
        if (user && user.name) {
            return <Redirect to={Constants.BASE_URL}/>;
        }
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>AGO - 数据系统</h1>
                </header>

                <section className="login-content">
                    {/* Spin 加载中 提示 */}
                    <Spin tip="Loading..." size="large" spinning={this.state.loading}>
                        <h2>用户登录</h2>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true
                            }}
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {required: true, message: 'Please input your Username!'},
                                    {min: 6, message: "用户名最少6位"},
                                    {max: 12, message: "用户名最多12位"},
                                    {pattern: /^[a-zA-Z0-9_]+$/, message: "用户名必须由英文、数字、下划线组成"}
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon"
                                                             style={{color: "rgba(0,0,0,0.25"}}/>}
                                       type="text"
                                       placeholder="Username"/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon"
                                                          style={{color: "rgba(0,0,0,0.25"}}/>}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                    </Spin>

                </section>
            </div>
        );
    }

}