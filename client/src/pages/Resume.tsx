import React from "react";
import styled from "styled-components";
import { FaDownload } from "react-icons/fa6";

const docId = import.meta.env.VITE_RESUME_DOC_ID;
const resumeDownloadUrl = docId
  ? `https://docs.google.com/document/d/${docId}/export?format=pdf`
  : "/resume.pdf";

const ResumePage: React.FC = () => {
  return (
    <Page>
      <Card>
        <Title>Resume</Title>
        <Subtitle>Download a copy of Chris Pesar's resume as a PDF.</Subtitle>
        <DownloadButton
          href={resumeDownloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <FaDownload />
          Download Resume
        </DownloadButton>
      </Card>
    </Page>
  );
};

export default ResumePage;

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #0d4f4f 0%, #4fd1c5 100%);
  padding: 24px;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 40px;
  max-width: 420px;
  width: 100%;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h1`
  font-family: "Original Surfer", sans-serif;
  color: #0d4f4f;
  font-size: 2rem;
  margin: 0 0 12px;
`;

const Subtitle = styled.p`
  color: #33403c;
  font-size: 1rem;
  margin: 0 0 28px;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #f9ca24;
  color: #0d4f4f;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 1rem;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;
