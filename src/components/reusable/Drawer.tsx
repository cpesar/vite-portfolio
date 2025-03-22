import { Button, Drawer } from "antd";
import { useState } from "react";
import { GiHamburger } from "react-icons/gi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  colors: {
    deepSea: string;
    shallowWater: string;
    seafoam: string;
    sand: string;
  };
  children: React.ReactNode;
}

const HeaderDrawer: React.FC<Props> = ({ colors, children }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
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
          background: `linear-gradient(to bottom, ${colors.shallowWater} 0%, ${colors.seafoam} 85%)`,
        }}
        closeIcon={<IoCloseCircleSharp />}
        placement="left"
        onClose={onClose}
        open={open}
        width={150}
      >
        <div className="font-original-surfer text-2xl mt-10 ">
          <div>
            <LinkStyle to="/about">About</LinkStyle>
          </div>
          <div>
            <LinkStyle to="/projects">Projects</LinkStyle>
          </div>
          <div>
            <LinkStyle to="/contact">Contact</LinkStyle>
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
