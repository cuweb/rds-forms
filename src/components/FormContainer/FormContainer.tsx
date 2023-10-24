import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { ReactNode } from 'react'

interface FormContainerProps {
  children: ReactNode
}

export const FormContainer = ({ children }: FormContainerProps) => {
  const initialValues = {
    firstname: '',
    radioOption: 'rOption1',
    checkboxOption: 'cOption2',
  }

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is required'),
  })

  const onSubmit = (values: { firstname: string }) => {
    console.log('Form data', values)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>{children}</Form>
    </Formik>
  )
}
