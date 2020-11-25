import axios from "axios"
import {message} from "antd";

export default class Ajax {

    static get(url, data = {}) {
        return Ajax._request2(url, data, "get");
    }

    static post(url, data = {}) {
        return Ajax._request2(url, data, "post");
    }

    /**
     * 统一处理请求，失败
     * @param url api连接
     * @param data 数据键值对
     * @param type get or post
     * @returns {Promise<unknown>}
     */
    static request(url, data, type) {
        return new Promise((resolve, reject) => {
            let promise = type === "get" ?
                axios.get(url, data) :
                axios.post(url, data);
            promise.then(response => {
                resolve(response);
            }).catch(error => {
                // reject(error);
                message.error("请求出错了：" + error.message);
            });

        });
    }

    static _request2(url, data, type) {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    if (url === "/login" && Ajax._check(data)) {
                        resolve({data: {status: 0, message: "成功", name: data.username}});
                    } else {
                        resolve({data: {status: -1, message: "用户名密码错误！"}});
                    }
                }, 3000);
            } catch (error) {
                // reject(error);
                message.error("请求出错了：" + error.message);
            }
        });
    }

    static _check(data = {}) {
        return data &&
            data.username === "admin1234" &&
            data.password === "12#$";
    }

}