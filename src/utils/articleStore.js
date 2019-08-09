export let  getItem = (key='article')=> {
    return JSON.parse(localStorage.getItem(key))
}

export let saveItem = (data) => {

    localStorage.setItem('article',JSON.stringify(data)||{})
}