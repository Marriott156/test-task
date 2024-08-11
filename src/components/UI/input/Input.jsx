import React from "react";
import { TextField, FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#66837e",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#37475e",
    },
  },
  "& .MuiInputLabel-root": {
    fontSize: "17px",
    color: "#66837e",
    "&.Mui-focused": {
      color: "#37475e",
    },
  },
}));

const Input = ({
  value,
  type = "text",
  required = false,
  disabled = false,
  ...props
}) => {
  return (
    <FormControl fullWidth variant="outlined">
      <CustomTextField
        type={type}
        required={required}
        disabled={disabled}
        value={value}
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        {...props}
      />
    </FormControl>
  );
};

export default Input;
