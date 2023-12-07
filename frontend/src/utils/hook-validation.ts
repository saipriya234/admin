import { ValidationRules, FieldValues, UseFormRegister } from "react-hook-form";

type FormValues = {
  companyName: string;
  companyUrl: string;
  tutorials: string[];
  simulations: string;
  primaryPhoneNumber: string;
  AdminLinkExtension: string;
  companyAdmin: string;
  companyOptions: string;
  selectedOptions: string[];
};

export const companyValidationRules: ValidationRules<FormValues> = {
  companyName: {
    required: "Company namess is required",
  },
  companyUrl: {
    required: "Company Url is required",
  },
  selectedOptions: {
    required: "Please select at least one option",
  },
  simulations: {
    required: "Simulations is required",
  },
  primaryPhoneNumber: {
    required: "Primary Phone Number is required",
  },
  AdminLinkExtension: {
    required: "Admin Link Extension is required",
  },
  companyAdmin: {
    required: "Company Admin is required",
  },
  companyOptions: {
    required: "Company Options is required",
  },
};

export type FormRegister = UseFormRegister<FieldValues>;

export const validateField = (
  name: keyof FormValues,
  rules: ValidationRules<FormValues>,
  register: FormRegister,
) => {
  const rule = rules[name];

  return register({
    ...rule,
    name,
  });
};
