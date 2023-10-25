/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ErrorMessage, useField } from "formik";
import Error from "../Error/Error";
import { primaryStyles, textStyles } from "../../styles/styles";
import { maxWidthClasses } from "../../helpers/optionClasses";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export interface WYSIWYGUploadProps {
  label: string;
  name: string;
  maxWidth?: "sm" | "md" | "lg" | "xl";
  helper?: string;
  required?: boolean;
}

export const WYSIWYG = ({ ...props }: WYSIWYGUploadProps) => {
  const { label, name, maxWidth, helper, required, ...rest } = props;
  const fieldMaxWidth = maxWidth ? maxWidthClasses[maxWidth] : "";
  const requiredClass = required ? primaryStyles.required : "";
  const [field] = useField(name);
  const [text, setText] = useState(field.value);
  const handleTextChange = (value: any) => {
    setText(value);
    field.onChange({ target: { name, value: value } });
  };
  return (
    <div
      className={`${primaryStyles.wrapper} ${fieldMaxWidth} ${requiredClass} form-control`}
    >
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <ReactQuill value={text} onChange={handleTextChange} {...rest} />

      <ErrorMessage name={name}>
        {(error) => <Error>{error}</Error>}
      </ErrorMessage>
    </div>
  );
};
