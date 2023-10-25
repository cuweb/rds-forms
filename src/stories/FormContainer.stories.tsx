import type { Meta, StoryObj } from '@storybook/react'
import { FormContainer } from '../components/FormContainer/FormContainer'
import { FieldControl } from '../components/FieldControl/FieldControl'
import { FormButton } from '..'

const meta: Meta = {
  title: 'Examples/Form Fields',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const FormExample: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="input"
        type="text"
        label="First Name"
        name="firstname"
        placeholder="Enter your name"
        helper="Enter your first name"
        required
      />
      <FormButton />
    </FormContainer>
  ),
}
