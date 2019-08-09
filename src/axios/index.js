import axios from 'axios'


let defaultUrl = 'https://api.github.com/repos/shanejix/shanejix.github.io/issues'
let defaultData = {}
let defautType = "GET"

let ajax = (url = defaultUrl, data = defaultData, type = defautType) => {
    if (type === "POST") {
        return axios.post(url, data)
    } else {
        return axios.get(url, {
            params: data
        })
    }
}

export default ajax