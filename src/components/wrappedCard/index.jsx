import React from "react";
import { Card ,Icon,Avatar} from "antd";

import "./index.less";

const { Meta } = Card;

export default function WrappedCard(props) {
    if (props && props.title === "about me") {
        return (
            <Card
                className="sider-card"
                bordered={false}
                hoverable={true}
                type="inner"
                title="Default size card"
                extra={<a href="#">More</a>}
            >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                {props.children}
            </Card>
        );
    }
    return (
        <Card
            className="article-card"
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />
            ]}
        >
            <Meta
                avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
            />
        </Card>
    );
}
