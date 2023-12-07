import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container } from "@mui/material";
import { Form } from "./React-hook-form";
import { FormData } from "../types/Recat-formTypes";

const Add: React.FC = () => {
  const { handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form submitted with data:", data);
  };

  const handleSubmitForm = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Form
          defaultValues={[]}
          onSubmit={onSubmit}
          onClick={handleSubmitForm}
          label="Submit"
        />
      </div>
    </Container>
  );
};

export default Add;
