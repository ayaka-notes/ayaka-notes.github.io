import Config from "@/config/config";

export class storage {
    // 基础存储操作
    setItem(key, value) {
        localStorage.setItem(key, value);
    }

    getItem(key) {
        return localStorage.getItem(key);
    }

    removeItem(key) {
        localStorage.removeItem(key);
    }

    // token相关操作
    static setToken(token, expire, user) {
        localStorage.setItem(Config.Client_LocalToken_Key, token);
        localStorage.setItem(Config.Client_LocalToken_Expire, expire);
        localStorage.setItem(Config.Client_LocalToken_User, user);
    }

    static getToken() {
        return localStorage.getItem(Config.Client_LocalToken_Key);
    }

    static getTokenExpire() {
        return localStorage.getItem(Config.Client_LocalToken_Expire);
    }

    static getTokenUser() {
        return localStorage.getItem(Config.Client_LocalToken_User);
    }

    static removeToken() {
        localStorage.removeItem(Config.Client_LocalToken_Key);
        localStorage.removeItem(Config.Client_LocalToken_Expire);
        localStorage.removeItem(Config.Client_LocalToken_User);
    }

    // check token是否过期
    static checkToken() {
        let token = localStorage.getItem(Config.Client_LocalToken_Key);
        let expire = localStorage.getItem(Config.Client_LocalToken_Expire);
        if (token === null || expire === null) {
            this.removeToken();
            return false;
        }
        let now = new Date().getTime();
        if (now > expire) {
            this.removeToken();
            return false;
        }
        // 如果还要和服务器通信，可以在这里检查token是否有效
        return true;
    }
}