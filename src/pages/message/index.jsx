import React from "react";
import { Form, Icon, Input, Button,message } from "antd";

import "./index.less";

const { TextArea } = Input;

class Message extends React.Component {
   

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log("Received values of form: ", values);
              message.success('submit success!');
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        
        return (
            <section className="message">
                <Form onSubmit={this.handleSubmit} className="message-form">
                    <Form.Item>
                        {getFieldDecorator("email", {
                            rules: [
                                {
                                    type: "email",
                                    message: "The input is not valid E-mail!"
                                },
                                {
                                    required: true,
                                    message: "Please input your E-mail!"
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="mail"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                placeholder="E-mail (required)"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator("nickname", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your nickname!",
                                    whitespace: true
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="smile"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                placeholder="Nick-Name (required)"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator("phone", {
                            rules: [
                                {
                                    len: 11,
                                    message:
                                        "Please input your 11 phone number!"
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="phone"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                placeholder="Phone-Number"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator("website", {
                            rules: []
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="code"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                placeholder="Website"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator("message", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your message!"
                                }
                            ]
                        })(<TextArea rows={10}
                          placeholder="Please input your message! (required)"
                        />)}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="message-form-button"
                        >
                            submit
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        );
    }
}

export default Form.create({ name: "message_validate" })(Message);
