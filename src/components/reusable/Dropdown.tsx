import { Button, Drawer } from "antd";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Dropdown({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </Drawer>
    </>
  );
}
