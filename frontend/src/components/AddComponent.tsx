import AdminAddForm from "./MyForm";

import { useState } from "react";

import { FormData } from "../types/interface";

const AddComponent = () => {
  const [initialFormData, setInitialFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    option1: false,
    option2: false,
  });

  const handleFormData = (formData: FormData) => {
    setInitialFormData(formData);
    console.log(initialFormData);
  };

  return (
    <div>
      <h2>Parent Component</h2>

      <AdminAddForm
        initialFormData={initialFormData}
        onSubmit={handleFormData}
      />
    </div>
  );
};

export default AddComponent;
