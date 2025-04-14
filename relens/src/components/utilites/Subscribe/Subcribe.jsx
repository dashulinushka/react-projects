import React, { useState } from "react";
import { Form, Input } from "antd";
import { Checkbox } from "antd";
import "./Subscribe.css";
import Button from "../Button/Button";

export default function Subscribe() {
  const [form] = Form.useForm();
  const [isActive, setIsActive] = useState(false);

  const onFinish = (values) => {
    console.log("Submitted:", values);
    setIsActive(true);
  };

  return (
    <section className="container">
      <div className="subscribe-container">
        <h1 className="subscribe-title">RELENS INFO</h1>
        <p className="subscribe-description">
          If you want to know new information about new cameras write here and
          subscribe
        </p>

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

          <Form.Item
            name="agreement"
            valuePropName="checked" // Это важно для чекбоксов
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error(
                          "You must agree to the processing of personal data",
                        ),
                      ),
              },
            ]}
          >
            <Checkbox className="checkbox">
              I agree to the processing of my personal data
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button isActive className="button-title">
              SUBSCRIBe
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
