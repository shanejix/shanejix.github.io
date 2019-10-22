import React from 'react'


import style from './Projects.module.css'

import proj1 from '../../assets/1.png'
import proj2 from '../../assets/2.png'
import proj3 from '../../assets/3.png'
import proj4 from '../../assets/4.png'
import proj5 from '../../assets/5.png'
import proj6 from '../../assets/6.png'

const projectsConf = [
  {
    key: Math.random(),
    title: 'shanejix.github.io',
    des: 'my blog:react+redux+antd',
    imgSrc: proj1,
    href: 'https://github.com/shanejix/shanejix.github.io'
  },
  {
    key: Math.random(),
    title: 'make-wheels',
    des: 'daily wheel making',
    imgSrc: proj2,
    href: 'https://github.com/shanejix/make-wheels'
  },
  {
    key: Math.random(),
    title: 'umi-cart',
    des: 'familiar with umi development process',
    imgSrc: proj3,
    href: 'https://github.com/shanejix/umi-cart'
  },
  {
    key: Math.random(),
    title: 'reactblog-front',
    des: 'blog management system:react+redux+antd',
    imgSrc: proj4,
    href: 'https://github.com/shanejix/reactblog-front'
  },
  {
    key: Math.random(),
    title: 'todoMVC-plus',
    des: 'todomvc demo and more',
    imgSrc: proj5,
    href: 'https://github.com/shanejix/todoMVC-plus'
  },
  {
    key: Math.random(),
    title: 'express_blog',
    des: 'familiar with the backend development process',
    imgSrc: proj6,
    href: 'https://github.com/shanejix/express_blog'
  },
]

export default function Projects() {

  return (
    <div className={style.projects}>
      <h2 className={style.title}>Projects</h2>
      <ul className={style.list}>
        {projectsConf.map(proj => {
          return (
            <li key={proj.key}>
              <a href={proj.href}>
                <h3> {proj.title} </h3>
                <p>{proj.des}</p>
                <img src={proj.imgSrc} alt='proj-img' />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
