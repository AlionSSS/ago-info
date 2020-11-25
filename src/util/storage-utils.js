import Constants from "../global/constants";

export default class StorageUtils {

    static saveUser(user) {
        localStorage.setItem(Constants.USER_KEY, JSON.stringify(user));
    }

    static getUser() {
        return JSON.parse(localStorage.getItem(Constants.USER_KEY) || "{}");
    }

    static removeUser() {
        localStorage.removeItem(Constants.USER_KEY);
    }

    static clear() {
        localStorage.clear();
    }

}