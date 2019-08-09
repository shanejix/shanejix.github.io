import React from "react";
import { Link } from "react-router-dom";
import { Card, Tag } from "antd";
import { connect } from 'react-redux'
import { putTag} from '../../redux/action'

import "./index.less";
import logo from "../../assets/img/user.jfif";
// import cover from "../../assets/img/cover.jpg";

// const { Meta } = Card;

const tags = [
    {
        text: "JavaScript",
        color: "magenta"
    },
    {
        text: "HTML",
        color: "red"
    },
    {
        text: "css",
        color: "volcano"
    },
    {
        text: "express",
        color: "orange"
    },
    {
        text: "Array",
        color: "lime"
    },
    {
        text: "algorithm",
        color: "green"
    },
    {
        text: "mogondb",
        color: "cyan"
    },
    {
        text: "performance",
        color: "blue"
    },
    {
        text: "react",
        color: "geekblue"
    },
    {
        text: "webpack",
        color: "purple"
    }
];

 class WrappedCard extends React.Component {
    // state = {}
    constructor() {
        super();
        this.state = {
            tags
        };
    }

    handleChange = tag => {
        let newTags = this.state.tags.map(ele => {
            if (ele.text === tag.text) {
                return {
                    text: tag.text,
                    color: "gold"
                };
            }

            return ele;
        });
        this.setState({
            tags: newTags
        });

        this.props.putTag(tag.text)
        
    };

    render() {
        let tags = this.state.tags || [];

        if (this.props && this.props.title === "about me") {
            return (
                <Card
                    className="sider-card"
                    bordered={false}
                    hoverable={true}
                    type="inner"
                    title={this.props.title}
                    // extra={<a href="#">More</a>}
                >
                    <Link
                        className="link"
                        to={`https://www.github.com.shanejix`}
                    >
                        <img src={logo} alt="shenajix logo" />
                        <div>GitHub</div>
                    </Link>
                    {this.props.children}
                </Card>
            );
        } else if (this.props && this.props.title === "tags") {
            return (
                <Card
                    className="sider-card"
                    bordered={false}
                    hoverable={true}
                    type="inner"
                    title={this.props.title}
                    // extra={<a href="#">More</a>}
                >
                    {tags.map(tag => {
                        return (
                            <Tag
                                className="tags"
                                color={tag.color}
                                onClick={() => this.handleChange(tag)}
                            >
                                {tag.text}
                            </Tag>
                        );
                    })}

                    {this.props.children}
                </Card>
            );
        }
        // return (
        //     <Card
        //         className="article-card"
        //         cover={
        //             <img
        //                 alt="example"
        //                 src={cover}
        //                 style={{ height: "200px" }}
        //             />
        //         }
        //     >
        //         <section className="context">
        //             {/* <Meta
        //             className="meta"
        //             title={this.props.title}
        //             // description={this.props.description}
        //         /> */}

        //             <div
        //                 style={{
        //                     fontWeight: 700,
        //                     fontSize: "20px",
        //                     paddingBottom: "25px"
        //                 }}
        //             >
        //                 {this.props.title}
        //             </div>

        //             {this.props.children}
        //             <Tag color="red" className="tag">
        //                 {this.props.tag}
        //             </Tag>
        //             <span className="time">{this.props.time}</span>
        //         </section>
        //     </Card>
        // );
    }
}

export default connect((state) => state,
    {
        putTag
    }
)(WrappedCard)