import { Form, Input, message, Button } from "antd";
import type { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { SubmitButton } from "../reusable/SubmitButton";

type FieldType = {
  subject?: string;
  name?: string;
  email?: string;
  message?: string;
};

const ContactForm = () => {
  const [form] = Form.useForm();

  const formItemClass = "font-original-surfer";

  const onFinish = async (values: FieldType) => {
    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        message.success("Form submitted successfully!");
        form.resetFields(); // Clear form after successful submission
      } else {
        message.error(
          "Error submitting form: " + (data.message || "Unknown error")
        );
        console.error("Error submitting form:", data);
      }
    } catch (error) {
      message.error("Error submitting form. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<FieldType>) => {
    console.log("Form validation failed:", errorInfo);
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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
            <SubmitButton form={form}>Submit</SubmitButton>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
