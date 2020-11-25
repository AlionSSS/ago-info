export default class Variables {
    static _user = {
        name: "Jerry"
    }

    static get user() {
        return this._user;
    }

    static set user(value) {
        this._user = value;
    }

}