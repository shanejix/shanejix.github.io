import React from "react";
import { Card, Tag,Button } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./index.less";

import marked from "marked";
import hljs from "highlight.js";

import { saveItem } from "../../utils/articleStore";
import cover from "../../assets/img/cover.jpg";

class Articles extends React.Component {
    constructor() {
        super();

        this.state = {
            articles: [],
            tags: []
        };
    }

    handleClick = article => {
        saveItem(article);
        console.log("handleClick");
    };

    filterArticle = () => {
        let articles = this.state.articles || [];
        let tags = this.state.tags || [];
        console.log("hhhhhhh", articles, tags);

        if (tags.length !== 0) {
            let filterArticle = articles.filter(article => {
                return tags.indexOf(article.tag) !== -1;
            });

            return filterArticle;
        }

        return articles;
    };
    componentWillMount() {
        this.setState({
            articles: this.props.article || [],
            tags: this.props.tag || []
        });

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
            highlight: function(code) {
                return hljs.highlightAuto(code).value;
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextProps", nextProps);

        this.setState({
            articles: nextProps.article || [],
            tags: nextProps.tag || []
        });
    }

    render() {
        let articles = this.filterArticle() || [];

        return (
            <div>
                {articles.map((article, index) => {
                    return (
                        <Card
                            className="article-card"
                            cover={
                                <img
                                    alt="example"
                                    src={cover}
                                    style={{ height: "200px" }}
                                />
                            }
                        >
                            <section className="context">
                                {/* <Meta
                                    className="meta"
                                    title={this.props.title}
                                    // description={this.props.description}
                                /> */}

                                <div
                                    style={{
                                        fontWeight: 700,
                                        fontSize: "25px",
                                        paddingBottom: "25px"
                                    }}
                                >
                                    {article.title}
                                </div>

                                <div className="content">
                                    <div
                                        id="content"
                                        className="article-detail"
                                        dangerouslySetInnerHTML={{
                                            __html: article.description
                                                ? marked(article.description)
                                                : null
                                        }}
                                    />
                                </div>
                                <Tag color="red" className="tag" style={{padding:'5px'}}>
                                    {article.tag}
                                </Tag>
                                <span className="time">{article.time}</span>

                                <Link
                                    style={{float:"right",marginTop:'25px'}}
                                    key={index}
                                    to={"/detail"}
                                    onClick={() => this.handleClick(article)}
                                >
                                    <Button type='primary'>阅读全文</Button>
                                </Link>
                            </section>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

export default connect(
    state => {
        return state;
    },
    {}
)(Articles);
