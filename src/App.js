import React from 'react';
import { Layout, Button, Card, Icon, Avatar } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

function App() {
  return (

    <Layout >
      <Header>

        <Button type="primary" shape="circle" icon="home" />

        <nav style={{ float: "right" }}>
          <Button type="link" >
            Link
        </Button>
          <Button type="link" >
            Link
        </Button>
          <Button type="link" >
            Link
        </Button>
          <Button type="link" >
            Link
          </Button>
        </nav>
      </Header>
      <Layout>
        <Sider style={{background:'#F0F2F5'}}>
          <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 ,marginLeft:250}}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          
          <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 ,marginLeft:250}}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>

          <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 ,marginLeft:250}}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>

          <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 ,marginLeft:250}}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Sider>

        <Content style={{paddingLeft:50}}>
          <Card
            style={{ width: 600 ,marginLeft:380 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>

          <Card
            style={{ width: 600 ,marginLeft:380 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>

          <Card
            style={{ width: 600 ,marginLeft:380 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>

          <Card
            style={{ width: 600 ,marginLeft:380 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>

          <Card
            style={{ width: 600 ,marginLeft:380 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
          
        </Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>

  );
}

export default App;
