import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Menu, Icon, Button, Modal } from "antd";

import "./index.less";
import logo from "../../assets/img/user.jfif";
import categories from "../../config/categoryLists";

const { confirm } = Modal;

class Header extends React.Component {

    mapCategories = () => {
        return categories.map(category => (
            <Menu.Item key={category.key}>
                <Link to={category.key}>
                    <Icon type={category.icon} />
                    {category.title}
                </Link>
            </Menu.Item>
        ));
    };

    logoIn = () => {
        confirm({
            title: 'Do you Want to delete these items?',
            content: 'Some descriptions',
            onOk() {
              console.log('OK');
            },
            onCancel() {
              console.log('Cancel');
            },
          });
    };
    

   
    componentWillMount() {
        this.menuLists = this.mapCategories();
    }

    componentDidMount() {
        console.log('header componentDidMount()')
    }
    
    render() {
        const path = this.props.location.pathname;
        console.log(path);
        return (
            <header className="header">
                <section className="header-link">
                    <Link to="/aticles">
                        <img alt="home" src={logo} />
                    </Link>
                </section>

                <Menu
                    className="header-nav"
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={[path]}
                >
                    {this.menuLists}
                </Menu>
                <section className="header-login">
                    <Button className="header-login-button" type="primary" onClick={this.logoIn}>
                        log?sign
                    </Button>
                </section>
            </header>
        );
    }
}

export default withRouter(Header);
