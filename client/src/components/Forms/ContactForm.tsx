import { Form, Input, message, Button } from "antd";
import React, { useState } from "react";
import { SubmitButton } from "../reusable/SubmitButton";

type FieldType = {
  subject?: string;
  name?: string;
  email?: string;
  message?: string;
};

const ContactForm = () => {
  const [form] = Form.useForm();

  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  });

  // console.log(formData);

  //   type LayoutType = Parameters<typeof Form>[0]["layout"];
  //   const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");

  // Override the default antd form item class
  const formItemClass = "font-original-surfer";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setFormData(data);
        console.log("Form submitted successfully:", data);
        // Show success message
      } else {
        // Show error message
        console.error("Error submitting form:", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full max-w-md mx-auto p-4">
        <div className="w-full text-center mb-6 font-original-surfer">
          <h2 className="text-2xl">Drop me a line!</h2>
        </div>

        <Form
          layout="vertical"
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          className="w-full"
          initialValues={{ remember: true }}
        >
          <Form.Item<FieldType>
            label={<span className="font-original-surfer">Subject</span>}
            className={formItemClass}
            name="subject"
            rules={[
              {
                required: true,
                message: (
                  <span className="font-original-surfer">
                    Please enter your subject
                  </span>
                ),
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label={<span className="font-original-surfer">Name</span>}
            className={formItemClass}
            name="name"
            rules={[
              {
                required: true,
                message: (
                  <span className="font-original-surfer">
                    Please enter your name
                  </span>
                ),
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label={<span className="font-original-surfer">Email</span>}
            className={formItemClass}
            name="email"
            rules={[
              {
                required: true,
                message: (
                  <span className="font-original-surfer">
                    Please enter your email
                  </span>
                ),
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label={<span className="font-original-surfer">Message</span>}
            className={formItemClass}
            name="message"
            rules={[
              {
                required: true,
                message: (
                  <span className="font-original-surfer">
                    Please enter your message
                  </span>
                ),
              },
            ]}
          >
            <Input.TextArea style={{ height: 140 }} />
          </Form.Item>

          <Form.Item label={null}>
            <SubmitButton onClick={handleSubmit} form={form}>
              Submit
            </SubmitButton>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
