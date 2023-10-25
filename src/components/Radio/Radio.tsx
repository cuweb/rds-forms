import { Field, ErrorMessage, FieldProps } from 'formik'
import Error from '../Error/Error'
import { primaryStyles, textStyles, fieldStyles } from '../../styles/styles'

export interface RadioProps {
  label: string
  name: string
  helper?: string
  isInline?: boolean
  required?: boolean
  options?: {
    key: string
    value: string
  }[]
}

export const Radio = ({ ...props }: RadioProps) => {
  const { label, name, options, isInline, helper, required, ...rest } = props
  const requiredClass = required ? primaryStyles.required : ''
  const displayInline = isInline ? fieldStyles.horizontalOptions : fieldStyles.verticalOptions

  return (
    <div className={`${primaryStyles.wrapper} ${requiredClass} form-control`}>
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <fieldset className={displayInline}>
        <Field name={name} {...rest}>
          {({ field }: FieldProps) => {
            return (
              options &&
              options.map((option) => {
                return (
                  <div key={option.value} className={fieldStyles.radioCheck}>
                    <input
                      type="radio"
                      id={option.value}
                      {...field}
                      {...rest}
                      value={option.value}
                      className={fieldStyles.disabledCheckbox}
                      checked={field.value && field.value.includes(option.value)}
                    />
                    <label htmlFor={option.value}>{option.key}</label>
                  </div>
                )
              })
            )
          }}
        </Field>
      </fieldset>

      <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>
    </div>
  )
}
