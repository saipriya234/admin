import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container } from "@mui/material";
import { Form } from "./React-hook-form";
import { FormData } from "../types/Recat-formTypes";

const Edit: React.FC = () => {
  const defaultValues: FormData = {
    companyName: "Initial Company Name",
    companyUrl: "Initial Company URL",
    tutorials: ["Initial Tutorial"],
    simulations: "Initial Simulation",
    primaryPhoneNumber: "Initial Phone Number",
    AdminLinkExtension: "Initial Admin Link Extension",
    companyAdmin: "Initial Company Admin",
    companyOptions: "Initial Company Options",
    selectedOptions: ["Initial Option"],
  };

  const { setValue, getValues } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form submitted with data:", data);
  };

  useEffect(() => {
    Object.keys(defaultValues).forEach((key) => {
      setValue(key as keyof FormData, defaultValues[key as keyof FormData]);
    });
  }, [defaultValues, setValue]);

  const handleSubmitForm = () => {
    const currentValue = getValues("companyName");
    setValue("companyName", `${currentValue} - Updated`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Form
          onSubmit={onSubmit}
          defaultValues={defaultValues}
          onClick={handleSubmitForm}
          label="Edit"
        />
      </div>
    </Container>
  );
};

export default Edit;
