import React from "react";
import { Typography } from "antd";
import "../css/shared.css";
import {Form, Input, Button} from 'antd';
import { section } from "../staticData/sections";


const {Title} = Typography;

const ContactsComponents = (props) => {
    const [form] = Form.useForm();

    const formItemLayout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 8,
      },
    };

    const buttonItemLayout ={
        wrapperCol: {
            span: 14,
            offset: 4,
        },
    };

    return (
      <div className="container padding pageContent" id={section.contacts}  ref={props.ownRef}>
        <div>
          <Title level={3} style={{ color: "white", textAlign: "center" }}>
            Contact
          </Title>
          <Form
            {...formItemLayout}
            layout={"horizontal"}
            form={form}
            style={{ margin: "auto" }}
          >
            <Form.Item label="Email" style={{ color: "whitesmoke" }}>
              <Input placeholder="Enter you email" />
            </Form.Item>
            <Form.Item label="Subject" style={{ color: "whitesmoke" }}>
              <Input placeholder="Enter subject" />
            </Form.Item>
            <Form.Item label="Subject" style={{ color: "whitesmoke" }}>
              <Input.TextArea placeholder="Enter your message" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
};

export default ContactsComponents;
