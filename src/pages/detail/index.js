import React from "react";
import { withRouter } from 'react-router-dom'
import { Card, Tag, Button, Icon } from "antd";

import marked from 'marked';
import hljs from 'highlight.js';

import "./index.less";
// import logo from "../../assets/img/user.jfif";
import cover from "../../assets/img/cover.jpg";
import { getItem } from '../../utils/articleStore'

const { Meta } = Card;

class Detail extends React.Component {

    state = {}

    handleClick = () => {
        this.props.history.goBack(-1)
    }

    componentWillMount() {
        let { title, description, tag, time } = getItem()
        this.setState({
            title,
            description,
            tag,
            time
        })


        // marked相关配置
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            },
        });
    }

    render() {
        let { title, description, tag, time } = this.state
        return (
            <section className='detail'>
                <Card
                    style={{ width: '1000px', margin: '0 auto' }}
                    className="article-card"
                    cover={
                        <img alt="example" src={cover} style={{ height: "200px" }} />
                    }
                >
                    <section className="context">
                        {/* <Meta
                            className="meta"
                            style={{fontSize: '20px'}}
                            title={title}
                        // description={props.description}
                        /> */}
                        <div style={{ fontWeight: 700, fontSize: '20px', paddingBottom: '25px' }}>{title}</div>
                        <div className="content">
                            <div
                                // id="content"
                                style={{ fontSize: '18px' }}
                                className="article-detail"
                                dangerouslySetInnerHTML={{
                                    __html: description ? marked(description) : null,
                                }}
                            />
                        </div>
                        <Tag color="red" className="tag">
                            {tag}
                        </Tag>
                        <span className="time">{time}</span>

                        <Button
                            type='primary'
                            style={{ float: 'right', marginTop: '25px', marginLeft: '10px' }}
                            onClick={this.handleClick}
                        >
                            
                            <Icon type="left" />
                            返回
                        </Button>
                    </section>
                </Card>
            </section>
        );
    }
}

export default withRouter(Detail)