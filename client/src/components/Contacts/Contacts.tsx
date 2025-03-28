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
  const [searchText, setSearchText] = useState("");

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const getFilteredContacts = () => {
    if (!searchText) return contacts;

    const searchLower = searchText.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchLower) ||
        contact.email.toLowerCase().includes(searchLower) ||
        contact.subject.toLowerCase().includes(searchLower) ||
        contact.message.toLowerCase().includes(searchLower)
    );
  };

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
        <Table
          columns={columns}
          dataSource={getFilteredContacts()}
          rowKey="id"
          scroll={{ x: 1100 }}
          pagination={{
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "50"],
          }}
          expandable={{
            expandedRowRender: (record) => (
              <div className="p-4 bg-gray-50">
                <Typography.Title level={5}>Full Message:</Typography.Title>
                <Typography.Paragraph>{record.message}</Typography.Paragraph>
                <Typography.Text type="secondary">
                  Submitted on {formatDate(record.created_at)}
                </Typography.Text>
              </div>
            ),
          }}
        ></Table>
      )}
    </div>
  );
};

export default Contacts;
