import type { Meta, StoryObj } from '@storybook/react'
import { FormContainer } from '../components/FormContainer/FormContainer'
import { FieldControl } from '..'
import FieldWrapper from '../components/FieldWrapper/FieldWrapper'

const meta: Meta = {
  title: 'Examples/Input Field',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const InputExample: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
          control="input"
          type="text"
          label="First Name"
          name="firstname"
          placeholder="Enter your first name"
          helper="Enter your first name"
          required
        />
    </FormContainer>
  ),
}

export const InputColumns: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldWrapper cols={2}>
        <FieldControl
            control="input"
            type="text"
            label="First Name"
            name="firstname"
            placeholder="Enter your name"
            helper="Enter your first name"
            required
          />
        <FieldControl
            control="input"
            type="text"
            label="Last Name"
            name="lastname"
            placeholder="Enter your last name"
            helper="Enter your last name"
            required
          />
      </FieldWrapper>
    </FormContainer>
  ),
}
