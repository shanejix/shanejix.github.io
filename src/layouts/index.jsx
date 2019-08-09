import React from "react";
import { withRouter } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

import "./index.less";
import WrappedCard from "../components/wrappedCard";
import { Layout } from "antd";
import { connect}from 'react-redux'
import { putArticleAsync} from '../redux/action'

const { Sider, Content } = Layout;
class Layouts extends React.Component {
    
    getArticles() {
        let {putArticleAsync}= this.props
        putArticleAsync()
    }
    componentDidMount() {
        this.getArticles()
    }

    render() {
        let { pathname } = this.props.location;
        if (pathname === "/") {
            return (
                <Layout className="layout-home">{this.props.children}</Layout>
            );
        } else if (pathname === "/detail") {
            return (
                <Layout className="layout">
                    <Header />
                    {/* <Layout className="layout-mian"> */}
                        <Content className="layout-mian-content">
                            {this.props.children}
                        </Content>
                    {/* </Layout> */}
                    <Footer />
                </Layout>
            );
        } else {
            return (
                <Layout className="layout">
                    <Header />
                    <Layout className="layout-mian">
                        <Sider className="layout-mian-sider">
                            <WrappedCard title="about me" />
                            <WrappedCard title="tags" />
                        </Sider>
                        <Content className="layout-mian-content">
                            {this.props.children}
                        </Content>
                    </Layout>
                    <Footer />
                </Layout>
            );
        }
    }
}

export default connect(
    state => state,
    {putArticleAsync}
)(withRouter(Layouts))
