import { primaryStyles } from '../../styles/styles'

export interface FormButtonProps {
  submit?: string
}

export const FormButton = ({ ...props }: FormButtonProps) => {
  const { submit = 'Submit' } = props

  return (
    <button type="submit" aria-label="Submit" className={primaryStyles.button}>
      {submit}
    </button>
  )
}
