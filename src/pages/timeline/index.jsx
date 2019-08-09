import React from "react";
import { Timeline, Icon } from "antd";

import "./index.less";

export default class TimeLine extends React.Component {
    render() {
        return (
            <section className="timeline">
                <Timeline className="timeline-group" mode="alternate">
                    <Timeline.Item>GitHub isuess blog</Timeline.Item>
                    <Timeline.Item>博客发布平台</Timeline.Item>
                    <Timeline.Item color="green">express</Timeline.Item>
                    <Timeline.Item color="green">todomvc</Timeline.Item>
                    <Timeline.Item
                        dot={
                            <Icon
                                type="clock-circle-o"
                                style={{ fontSize: "16px" }}
                            />
                        }
                    >
                        2018，重入前端，翻天覆地
                    </Timeline.Item>
                    <Timeline.Item color="red">迷度</Timeline.Item>
                    <Timeline.Item color="red">迷度</Timeline.Item>
                    <Timeline.Item color="red">迷度</Timeline.Item>
                    <Timeline.Item color="red">迷度</Timeline.Item>
                    <Timeline.Item color="red">迷度</Timeline.Item>
                    <Timeline.Item color="red">迷度</Timeline.Item>
                    <Timeline.Item color="red">迷度</Timeline.Item>
                    <Timeline.Item>
                        中途入了，学英语的坑，以听为首，没有然后
                    </Timeline.Item>
                    <Timeline.Item
                        dot={
                            <Icon
                                type="clock-circle-o"
                                style={{ fontSize: "16px" }}
                            />
                        }
                    >
                        2015年接触前端
                    </Timeline.Item>
                </Timeline>
            </section>
        );
    }
}
