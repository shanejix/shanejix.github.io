import ajax from '../axios/index'

let putArticle = (articles) => {
    return {
        type: 'put_article',
        articles
    }
}

export let putArticleAsync = () => {
    return dispatch => {
        ajax().then(result => {
            // debugger
            console.log(result)

            let articles
            if (result && result.status === 200) {
                articles = result.data.map(ele => {
                    return {
                        title: ele.title,
                        description: ele.body,
                        time: ele.updated_at,
                        tag: ele.labels[0].name
                    }
                })
            }
            console.log(articles)
            dispatch(putArticle(articles))
        });


    };
}

export let putTag = (tag) => {
    return {
        type: 'tag',
        tag
    }
}