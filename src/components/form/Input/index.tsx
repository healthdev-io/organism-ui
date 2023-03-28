import React from "react";
import { styled } from "../../../config/stiches.config";

interface Props {
  error?: string;
  label?: string;
}

export type InputProps = Props & JSX.IntrinsicElements["input"];

const InputWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

const InputLabel = styled("label", {
  width: "fit-content",
  fontWeight: 400,
  fontSize: ".875rem",
  lineHeight: "1.3125rem",
  color: "$text500",
  marginBottom: ".25rem",
});

const StyledInput = styled("input", {
  height: 45,
  padding: ".75rem 1rem",
  fonteWeight: 400,
  fontSize: ".875rem",
  lineHeight: "1.3125rem",
  color: "$text400",
  borderRadius: 4,
  background: "$neutralWhite",
  border: "1px solid #e4e4e4",

  "&:disabled": {
    cursor: "not-allowed",
    backgroundColor: '#f1f1f1'
  },

  "&:focus": {
    outline: 0,
    borderColor: "$primary600",
  },
});

const InputError = styled("span", {
  color: "red",
  width: "fit-content",
  fontWeight: 400,
  fontSize: ".75rem",
  lineHeight: "1.3125rem",
  marginBottom: ".25rem",
});

const InputRequiredMarker = styled('span', {
  color: 'red',
})

export const Input: React.FC<InputProps> = ({ error, label, ...rest }) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={rest.id}>
        {label} {rest.required && <InputRequiredMarker>*</InputRequiredMarker>}
      </InputLabel>
      <StyledInput {...(rest as any)} />
      {error && <InputError>{error}</InputError>}
    </InputWrapper>
  );
};
