import React from 'react'

import { Link } from 'react-router-dom'
import { Icon } from 'antd'

import './index.css'

import avatar from '../../assets/avatar.jpg'


const socialLinksConfig = [
  {
    key: Math.random(),
    type: 'github',
    href: 'https://github.com/shanejix',
    display: true
  },
  {
    key: Math.random(),
    type: 'twitter',
    href: 'https://twitter.com/@shanejixx',
    display: true
  },
  {
    key: Math.random(),
    type: 'medium',
    href: 'https://medium.com/@shanejix',
    display: true
  },
  {
    key: Math.random(),
    type: 'youtube',
    href: 'https://youtube.com/channel/UCtcuD0729Okasj9eEF8v_Iw?view_as=subscriber',
    display: true
  },
  {
    type: 'reddit',
    href: 'https://reddit.com/shanejix',
    display: true
  },
  {
    key: Math.random(),
    type: 'weibo',
    href: 'https://weibo.com/shanejix',
    display: true
  },
  {
    key: Math.random(),
    type: 'github',
    href: 'https://github.com',
    display: false
  },
]

const routeConfig = [
  { key: Math.random(), title: 'Blog', href: '/posts', display: true },
  { key: Math.random(), title: 'Projects', href: '/', display: true },
  { key: Math.random(), title: 'FontendStack', href: '/fontendstack', display: true },
  { key: Math.random(), title: 'TimeLine', href: '/timeline', display: true },
  { key: Math.random(), title: 'Message', href: '/message', display: true },
  { key: Math.random(), title: 'Friends', href: '/friends', display: true },
  { key: Math.random(), title: 'Other', href: '/other', display: true },
]

export default function Header() {


  return (
    <header className='header'>
      <div className='header-wrapper'>

        <div className='header-avatar'>
          <img alt='avatar' src={avatar} />
        </div>

        <div className="header-info">

          <a href='/' className='header-title'>
            <h1 >ShaneJix</h1>
          </a>

          <p className='header-description'>
            Web developer, open-source contributor and lifelong learner.
          </p>

          <ul className='header-nav-links'>
            {routeConfig.map((item, idx) => {
              return (
                item.display &&
                <li kye={item.key}>
                  <Link to={item.href}>{item.title}</Link>
                </li>
              )
            })}
          </ul>

          <ul className="header-social" >
            {socialLinksConfig.map((item, idx) => {
              return (
                item.display &&
                <li key={item.key}>
                  <a href={item.href} target='blank'>
                    <Icon type={item.type} />
                  </a>
                </li>
              )
            })}
          </ul>

        </div >
      </div >

    </header >
  )

}


