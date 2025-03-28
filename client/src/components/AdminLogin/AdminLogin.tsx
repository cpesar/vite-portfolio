import { Button, Card, Form, Input, message } from "antd";
import { use, useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
  username: string;
  password: string;
}

const AdminLogin: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const onFinish = async (values: LoginFormValues) => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        message.success("Login successful");
        //store the token in local storage
        localStorage.setItem("token", data.token);
        // redirect to admin dashboard
        navigate("/contact-list");
      } else {
        message.error(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      message.error("Error logging in. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Form name="adminLogin" layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input placeholder="username" size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input placeholder="password" size="large" />
          </Form.Item>
          <Form.Item>
            <Button>Login</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AdminLogin;
