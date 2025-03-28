import { message, Table } from "antd";
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
  return (
    <div>
      <Table></Table>
    </div>
  );
};

export default Contacts;
