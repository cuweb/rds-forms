/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, useFormik } from "formik";
import Error from "../Error/Error";
import { primaryStyles, textStyles, fieldStyles } from "../../styles/styles";
import { maxWidthClasses } from "../../helpers/optionClasses";
import fileUploadValidationSchema from "../../helpers/fileUploadValidationSchema";

export interface FileUploadProps {
  label: string;
  name: string;
  maxWidth?: "sm" | "md" | "lg" | "xl";
  helper?: string;
  required?: boolean;
}

export const FileUpload = (props: FileUploadProps) => {
  const { label, name, maxWidth, helper, required, ...rest } = props;
  const fieldMaxWidth = maxWidth ? maxWidthClasses[maxWidth] : "";
  const requiredClass = required ? primaryStyles.required : "";
  const initialValues = {
    file: null,
  };
  const validationSchema = fileUploadValidationSchema;
  const onSubmit = (values: { file: any }) => {
    // You can handle the file here, e.g., upload it to a server
    console.log("Uploaded file:", values.file);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div
      className={`${primaryStyles.wrapper} ${fieldMaxWidth} ${requiredClass} form-control`}
    >
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <input
        type="file"
        id="file"
        name="file"
        className={fieldStyles.uploads}
        onChange={(event) => {
          const selectedFile = event.currentTarget.files?.[0];
          formik.setFieldValue("file", selectedFile);
        }}
        onBlur={formik.handleBlur}
        {...rest}
      />

      <ErrorMessage name={name}>
        {(error) => <Error>{error}</Error>}
      </ErrorMessage>
    </div>
  );
};
