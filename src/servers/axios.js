
//封装axios，返回data并做错误拦截

import axios from 'axios'
import { message } from 'antd'


let defaultUrl = 'https://api.github.com/repos/shanejix/shanejix.github.io/issues'
let defaultData = {}
let defautType = "GET"

let ajax = (url = defaultUrl, data = defaultData, type = defautType) => {
    return new Promise((resolve, reject) => {

        let promise;

        if (type === "POST") {
            promise = axios.post(url, data)
        } else {
            promise = axios.get(url, {
                params: data
            })
        }

        promise.then(result => {
            message.success('request sucess')
            resolve(result)
        }).catch(e => {
            message.error('request error' + e.message)
        })
    })
}

export default ajax