import { message, Spin, Table, Typography } from "antd";
import { ColumnType } from "antd/es/table";
import { useEffect, useState } from "react";

interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  //   const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // fetch contacts from the API
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5001/api/contact");

        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }

        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        message.error("Failed to load contacts. Please try again");
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const columns: ColumnType<Contact>[] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 50,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      width: 200,
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
      width: 300,
      ellipsis: true,
    },
    {
      title: "Submitted At",
      dataIndex: "created_at",
      key: "created_at",
      width: 180,
      render: (text) => new Date(text).toLocaleString(),
      sorter: (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
    },
  ];
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <Typography.Title level={4} className="m-0">
          Contact Form Submissions
        </Typography.Title>
        {/* Add Search box here */}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Spin size="large" />
        </div>
      ) : (
        <Table></Table>
      )}
    </div>
  );
};

export default Contacts;
