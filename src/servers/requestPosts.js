import axios from './axios.js'


const reqPosts = (cb) => {

  axios().then(data => {

    // console.log(data);


    let payload = []

    if (data && data.status === 200) {
      //请求成功
      data.data.forEach(ele => {
        payload.push({
          id: ele.id,
          title: ele.title,
          time: ele.updated_at,
          labels: ele.labels,
          body: ele.body,
          html_url: ele.html_url
        })
      })

      //locolstorage

      localStorage.setItem('aticle-lists', JSON.stringify(payload) || '')

      //dispatch
      cb(payload)

    }
  })




}

export default reqPosts