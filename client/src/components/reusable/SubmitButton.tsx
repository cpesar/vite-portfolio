import { Button, Form, FormInstance } from "antd";
import { useEffect, useState } from "react";

interface SubmitButtonProps {
  form: FormInstance;
  className?: string;
  // onClick: (e: React.FormEvent) => Promise<void>;
}

export const SubmitButton: React.FC<
  React.PropsWithChildren<SubmitButtonProps>
> = ({ form, children }) => {
  const [submittable, setSubmittable] = useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button
      className="font-original-surfer"
      type="primary"
      htmlType="submit"
      disabled={!submittable}
    >
      {children}
    </Button>
  );
};
