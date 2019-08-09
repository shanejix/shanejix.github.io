
import { combineReducers } from 'redux'

let defaultState = []

let article = (state = defaultState, action) => {
    switch (action.type) {
        case 'put_article':
            return [...action.articles]
        default:
            return state
    }
}

let defaultTags = []
let tag = (state = defaultTags, action) => {
    switch (action.type) {
        case 'tag':

            let arr = [...state, action.tag]
            return [...new Set(arr)]

        default:
            return state
    }
}



export default combineReducers({
    article,
    tag
})