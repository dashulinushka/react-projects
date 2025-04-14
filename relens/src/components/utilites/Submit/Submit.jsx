import React, { useState } from "react";
import { Form, Input } from "antd";
import "./Submit.css";
import Button from "../Button/Button";

export default function Submit() {
  const [form] = Form.useForm();
  const [isActive, setIsActive] = useState(false);

  const onFinish = (values) => {
    console.log("Submitted:", values);
    setIsActive(true);
  };

  return (
    <section className="container">
      <div className="subscribe-container">
        <h1 className="subscribe-title">ANY QUESTIONS?</h1>
        <p className="subscribe-description">write to us</p>

        <div className="email-info">
          <h2 className="email-title">Email address</h2>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="subscribe-form"
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
          >
            <Input placeholder="Your email address" className="form-input" />
          </Form.Item>

          <div className="email-info">
            <h2 className="email-title">First name</h2>
          </div>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
          >
            <Input placeholder="Darya Babich" className="form-input" />
          </Form.Item>

          <Form.Item>
            <Button isActive className="button-title">
              submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
