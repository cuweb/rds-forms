import { ErrorMessage, useField } from "formik";
import Error from "../Error/Error";
import DatePicker from "react-datepicker";
import { primaryStyles, textStyles, fieldStyles } from "../../styles/styles";
import { maxWidthClasses } from "../../helpers/optionClasses";
import "react-datepicker/dist/react-datepicker.css";

export interface DateTimeProps {
  label: string;
  name: string;
  maxWidth?: "sm" | "md" | "lg" | "xl";
  helper?: string;
  required?: boolean;
  customMinDate?: Date;
  showTime?: boolean;
  dateFormat?: string;
  timeFormat?: string;
}

export const DateTime = (props: DateTimeProps) => {
  const {
    label,
    name,
    helper,
    required,
    showTime,
    dateFormat = "MMMM d, yyyy",
    timeFormat = "HH:mm",
    customMinDate,
    maxWidth,
    ...rest
  } = props;
  const requiredClass = required ? primaryStyles.required : "";
  const [field, , helpers] = useField(name);
  const { setValue, setTouched, setError } = helpers;

  const fieldMaxWidth = maxWidth ? maxWidthClasses[maxWidth] : "";

  const handleDateChange = (date: Date) => {
    setValue(date);
    setTouched(true);
    setError(undefined);
  };

  return (
    <div
      className={`${primaryStyles.wrapper} ${fieldMaxWidth} ${requiredClass} form-control`}
    >
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <DatePicker
        selected={field.value}
        name={name}
        onChange={(date: Date) => {
          handleDateChange(date);
        }}
        showTimeSelect={showTime}
        timeFormat={timeFormat}
        dateFormat={dateFormat}
        minDate={customMinDate}
        placeholderText={dateFormat}
        className={`${fieldStyles.input} ${fieldStyles.disabled} w-full`}
        {...rest}
      />

      <ErrorMessage name={name}>
        {(error) => <Error>{error}</Error>}
      </ErrorMessage>
    </div>
  );
};
