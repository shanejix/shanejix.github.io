import React from 'react'
import { Card } from 'antd'

import Header from './Header'
import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact/Contact'

import fontendnavs from '../../config/fontendnavs.config'

import NavCard from './NavCard'

const tagsMapToId = {
  "1": "React Ecological"
};

export default function FontendNav() {
  return (
    <div>
      <Header></Header>

      <main
        style={{
          padding: '0 10vw',

        }}>

        {fontendnavs && fontendnavs.map(ele => {
          if (ele.id === '1') {

            return (
              <div style={{
                padding: '30px',

                width: '100%'
              }}>
                <Card
                  key={ele.id}
                  title={ele.tag}
                  bordered={false}
                  style={{
                    backgroundColor: '#fff',

                  }}
                >
                  <div
                    style={{
                      // margin: '0 -2em',
                      padding: '0 4.5em',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-beteew'
                    }}
                  >

                    {ele.list && ele.list.map(nav => {
                      return (
                        <NavCard
                          key={nav.title}
                          title={nav.title}
                          desc={nav.desc}
                          img={nav.img}
                          actions={nav.actions}
                        />
                      )
                    })}

                  </div>

                </Card>

              </div>
            )

          }

          if (ele.id === '2') {

          }

          if (ele.id === '3') {

          }

          if (ele.id === '4') {

          }

          if (ele.id === '5') {

          }

          if (ele.id === '6') {

          }

        })}

      </main>



      <div style={{
        paddingLeft: '10vw',
        paddingTop: '5em'
      }}>
        <Contact />
      </div>

      <Footer></Footer>
    </div>

  )
}
