import { useEffect } from "react";
import {
  useForm,
  SubmitHandler,
  useFieldArray,
  FieldValues,
} from "react-hook-form";
import { FormData } from "../types/Recat-formTypes";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Autocomplete,
  Checkbox,
} from "@mui/material";
import { companyValidationRules } from "../utils/hook-validation";
import { options } from "../stores/optionsStrore";

export const Form = ({
  onSubmit,
  onClick,
  label,
  defaultValues,
}: {
  onSubmit: SubmitHandler<FormData>;
  onClick: () => void;
  label: string;
  defaultValues: FieldValues;
}) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  useFieldArray({
    control,
    name: "selectedOptions",
  });

  useEffect(() => {
    if (defaultValues !== undefined) {
      Object.keys(defaultValues).forEach((key) => {
        setValue(key as keyof FormData, defaultValues[key]);
      });
    }
  }, [defaultValues, setValue]);

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography variant="h5">Company Add Form</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("companyName", companyValidationRules.companyName)}
                label="Company Name"
                fullWidth
                error={!!errors.companyName}
                helperText={errors.companyName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("companyUrl", {
                  required: "Company Url is required",
                })}
                label="Company Url"
                fullWidth
                error={!!errors.companyUrl}
                helperText={errors.companyUrl?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={options}
                disableCloseOnSelect
                getOptionLabel={(option) => option}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox checked={selected} />
                    {option}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Select Options"
                    placeholder="Search..."
                    error={!!errors.selectedOptions}
                    helperText={
                      errors.selectedOptions &&
                      "Please select at least one option"
                    }
                  />
                )}
                // control={control}
                isOptionEqualToValue={(option, value) => option === value}
                onChange={(_, value) => setValue("selectedOptions", value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("simulations", {
                  required: "simulations is required",
                })}
                label="simulations"
                fullWidth
                error={!!errors.simulations}
                helperText={errors.simulations?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("primaryPhoneNumber", {
                  required: "primary Phone Number is required",
                })}
                label="Primary Phone Number"
                fullWidth
                error={!!errors.primaryPhoneNumber}
                helperText={errors.primaryPhoneNumber?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("AdminLinkExtension", {
                  required: "Admin Link Extension is required",
                })}
                label="Admin Link Extension"
                fullWidth
                error={!!errors.AdminLinkExtension}
                helperText={errors.AdminLinkExtension?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("companyAdmin", {
                  required: "company Admin is required",
                })}
                label="company Admin"
                fullWidth
                error={!!errors.companyAdmin}
                helperText={errors.companyAdmin?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("companyOptions", {
                  required: "company Options is required",
                })}
                id="outlined-multiline-static"
                label="Company Options"
                multiline
                rows={4}
                defaultValue="Enter in JSON format"
                error={!!errors.companyOptions}
                helperText={errors.companyOptions?.message}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={onClick}
            fullWidth
          >
            {label}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Form;
