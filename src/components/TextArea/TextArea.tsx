import { Field, ErrorMessage } from 'formik'
import Error from '../Error/Error'
import { primaryStyles, textStyles, fieldStyles } from '../../styles/styles'
import { maxWidthClasses } from '../../helpers/optionClasses'

export interface TextAreaProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
}

export const TextArea = (props: TextAreaProps) => {
  const { label, name, maxWidth, helper, required, ...rest } = props
  const fieldMaxWidth = maxWidth ? maxWidthClasses[maxWidth] : ''
  const requiredClass = required ? primaryStyles.required : ''

  return (
    <div className={`${primaryStyles.wrapper} ${fieldMaxWidth} ${requiredClass} form-control`}>
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <Field as="textarea" id={name} name={name} className={`${fieldStyles.input} ${fieldStyles.disabled}`} {...rest} />

      <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>
    </div>
  )
}
