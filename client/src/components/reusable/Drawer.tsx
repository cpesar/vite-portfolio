import React from "react";
import { Button, Drawer } from "antd";
import { useState } from "react";
import { GiHamburger } from "react-icons/gi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useBeachTheme } from "../../context/BeachContext/useBeachTheme";

const HeaderDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { gradients } = useBeachTheme();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        style={{
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={showDrawer}
        ghost
      >
        <GiHamburger />
      </Button>
      <Drawer
        styles={{ header: { border: "none" } }}
        style={{
          background: gradients.content,
        }}
        closeIcon={<IoCloseCircleSharp />}
        placement="right"
        onClose={onClose}
        open={open}
        width={150}
      >
        <div className="font-original-surfer text-2xl mt-10 ">
          <div>
            <div>
              <LinkStyle to="/" onClick={handleLinkClick}>
                Home
              </LinkStyle>
            </div>
            <LinkStyle to="/about" onClick={handleLinkClick}>
              About
            </LinkStyle>
          </div>
          <div>
            <LinkStyle to="/projects" onClick={handleLinkClick}>
              Projects
            </LinkStyle>
          </div>
          <div>
            <LinkStyle to="/resume" onClick={handleLinkClick}>
              Resume
            </LinkStyle>
          </div>
          <div>
            <LinkStyle to="/contact" onClick={handleLinkClick}>
              Contact
            </LinkStyle>
          </div>
          <div>
            <LinkStyle to="/contact-list" onClick={handleLinkClick}>
              Contact List
            </LinkStyle>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default HeaderDrawer;

const LinkStyle = styled(Link)`
  color: black;
  transition: color 0.3s ease;
  display: inline-block;
  margin: 10px 0;
`;
