
import React from 'react'

import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import style from './Posts.module.css'


const defaultPosts = [
  {
    id: '1',
    title: '如何找到时薪 80 美元的远程工作（一）',
    time: '2018-15-56',
    tags: 'job',

  },
  {
    id: '2',
    title: '如何找到时薪 80 美元的远程工作（二）',
    time: '2018-15-56',
    tags: 'job',

  },
  {
    id: '3',
    title: '如何找到时薪 80 美元的远程工作（三）',
    time: '2018-15-56',
    tags: 'job',

  },
  {
    id: '3',
    title: '如何找到时薪 80 美元的远程工作（四）',
    time: '2018-15-56',
    tags: 'job',

  },
  {
    id: '3',
    title: '如何找到时薪 80 美元的远程工作（五）',
    time: '2018-15-56',
    tags: 'job',

  },
  {
    id: '3',
    title: '如何找到时薪 80 美元的远程工作（六）',
    time: '2018-15-56',
    tags: 'job',

  },
]

function Posts(props) {



  let postsList = defaultPosts
  const { pathname } = props.location
  const { posts } = props


  if (pathname === '/') {
    postsList = (posts.length && posts.slice(0, 6)) || defaultPosts
  } else {
    postsList = posts ||defaultPosts
  }



  // const postlists = (posts.length && posts)||defaultPosts

  return (
    <div className={style.posts}>
      <h2 className={style.title}>Posts</h2>
      <div className={style.content}>

        <ul>
          {
            postsList.map((post, idx) => {
              return (
                <li key={idx} className={style.item}>
                  <span className={style.meta}>
                    <span>{post.time}</span>
                    <a href='javascript'>{post.tags}</a>
                  </span>
                  <h3 className={style.itemtitle}>
                    <Link to={{
                      pathname: `/detail/${post.id}`
                    }}>
                      {post.title}
                    </Link>
                  </h3>
                </li>
              )
            })
          }
        </ul>

        <div className={style.pagination}>
          <Link to='/posts'>更多文章</Link>
        </div>
      </div>
    </div >
  )
}


const mapStateToProps = (state) => ({
  posts: state.posts
})

export default withRouter(connect(mapStateToProps)(Posts))
