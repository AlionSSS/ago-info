import Ajax from "./ajax";


/**
 * API 登录
 * @param username 用户名
 * @param password 密码
 */
export function reqLogin(username, password) {
    return Ajax.post("/login", {username, password});
}

export function reqAddUser(user) {
    return Ajax.post("/manage/user/add", user)
}