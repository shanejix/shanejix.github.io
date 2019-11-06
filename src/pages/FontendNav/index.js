import React from 'react'
import { Card, Icon } from 'antd'

import Header from './Header'
import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact/Contact'

import fontendnavs from '../../config/fontendnavs.config'

import NavCard from './NavCard'



export default function FontendNav() {
  return (
    <div>
      <Header></Header>

      <main
        style={{
          padding: '0 10vw',

        }}>



        {fontendnavs && fontendnavs.map(ele => {


          if (ele.id === '') {
            return (

              <div style={{
                padding: 0,
                margin: '20px auto',

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
                  <h2
                    style={{
                      fontSize: '1.3em'
                    }}
                  >
                    React technology stack
                  </h2>
                  <div
                    style={{
                      fontSize: '1.2em'
                    }}
                  >
                    Record the daily use of warehouses, tools, and materials for easy follow-up.
                    <span
                      style={{
                        paddingLeft: '10px',
                        paddingRight: '10px'
                      }}
                    >

                      <Icon
                        style={{
                          fontSize: '1.3em'
                        }}
                        type="home"
                      />

                      :Home
                    </span>
                    <span
                      style={{
                        paddingRight: '10px'
                      }}
                    >

                      <Icon
                        style={{
                          fontSize: '1.3em'
                        }}
                        type="book"
                      />
                      :Document
                    </span>
                    <span >

                      <Icon
                        style={{
                          fontSize: '1.3em'
                        }}
                        type="github"
                      />
                      :Github
                    </span>
                  </div>

                </Card>


              </div>

            )
          }

          return (
            <div style={{
              padding: 0,
              margin: '20px auto',

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
                    padding: '0 auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around'
                  }}
                >

                  {ele.list && ele.list.map(nav => {
                    console.log(nav.img);

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
