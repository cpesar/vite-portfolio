import { Button, Drawer } from "antd";
import { useState } from "react";

const Dropdown: React.FC = () => {
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
};

export default Dropdown;
