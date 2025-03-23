import React, { useState } from "react";
import { Skeleton } from "antd";

const ResumePage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const docId = import.meta.env.VITE_RESUME_DOC_ID;

  const embedUrl = `https://docs.google.com/document/d/${docId}/preview`;

  return (
    // <Skeleton loading={loading}>
    <div
      className="resume-container"
      style={{
        width: "100%",
        height: "100vh",
        padding: "0",
        margin: "0",
        overflow: "hidden",
      }}
    >
      <iframe
        src={embedUrl}
        title="Resume"
        width="100%"
        height="100%"
        style={{
          border: "none",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
        frameBorder="0"
        allowFullScreen
      />
    </div>
    // </Skeleton>
  );
};

export default ResumePage;
