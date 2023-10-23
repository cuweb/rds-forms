import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import { primaryStyles, textStyles, fieldStyles } from '../../styles/styles';
import { maxWidthClasses } from '../../helpers/optionClasses';

export interface InputProps {
  label: string;
  name: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  helper?: string;
  required?: boolean;
}

export const Input = (props: InputProps) => {
  const { label, name, maxWidth, helper, required } = props;
  const fieldMaxWidth = maxWidth ? maxWidthClasses[maxWidth] : '';
  const requiredClass = required ? primaryStyles.required : '';

  return (
    <div className={`${primaryStyles.wrapper} ${fieldMaxWidth} ${requiredClass} form-control`}>
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <Field type="text" id={name} name={name} className={fieldStyles.input} />
      
      <ErrorMessage name={name}>
        {error => <TextError>{error}</TextError>}
      </ErrorMessage>
    </div>
  );
};
