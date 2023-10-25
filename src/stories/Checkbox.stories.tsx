import type { Meta, StoryObj } from '@storybook/react'
import { FormContainer } from '../components/FormContainer/FormContainer'
import { FieldWrapper } from '../components/FieldWrapper/FieldWrapper'
import { FieldControl } from '../components/FieldControl/FieldControl'
import { checkboxOptions } from '../data/data'

const meta: Meta = {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const CheckboxField: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="checkbox"
        label="Checkbox topic"
        name="checkboxOption"
        options={checkboxOptions}
        helper="Please select a thing"
        required
      />
    </FormContainer>
  ),
}

export const CheckboxDisabled: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="checkbox"
        label="Checkbox topic"
        name="checkboxOption"
        options={checkboxOptions}
        helper="Please select a thing"
        disabled
        required
      />
    </FormContainer>
  ),
}

export const InColumns: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldWrapper cols={2}>
        <FieldControl
          control="checkbox"
          label="Checkbox topic"
          name="checkboxOption"
          options={checkboxOptions}
          helper="Please select a thing"
          required
        />
        <FieldControl
          control="checkbox"
          label="Checkbox topic"
          name="checkboxOption"
          options={checkboxOptions}
          helper="Please select a thing"
          required
        />
      </FieldWrapper>
    </FormContainer>
  ),
}

export const InlineOptions: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="checkbox"
        label="Checkbox topic"
        name="checkboxOption"
        options={checkboxOptions}
        helper="Please select a thing"
        isInline
        required
      />
    </FormContainer>
  ),
}
