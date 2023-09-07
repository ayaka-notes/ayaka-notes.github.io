// import React from "react";
import Config from "@/config/config";
import { storage } from "./storage";

export default class NetRequest{
    static getRequest(url, params, callback) {
        let reqUrl = Config.API_BaseURL + url;
        // 根据params生成query string
        let queryStr = "";
        if (params && Object.keys(params).length > 0) {
            queryStr = "?";
            for (const key in params) {
                queryStr += key + "=" + params[key] + "&";
            }
            queryStr = queryStr.substring(0, queryStr.length - 1);
        }

        reqUrl += queryStr;
        // 获取token
        let token = storage.getToken() == null ? '' : storage.getToken();

        // 发送get请求
        fetch(reqUrl,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'token': token,
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                callback(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    static postRequest(url, params, callback) {
        let reqUrl = Config.API_BaseURL + url;
        // 获取token
        let token = storage.getToken() == null ? '' : storage.getToken();

        // 发送post请求
        fetch(reqUrl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'token': token,
            },
            body: JSON.stringify(params),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                callback(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
};