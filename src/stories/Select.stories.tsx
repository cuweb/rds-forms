import type { Meta, StoryObj } from "@storybook/react";
import { FormContainer } from "../components/FormContainer/FormContainer";
import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";
import { FieldControl } from "../components/FieldControl/FieldControl";
import { dropdownOptions } from "../data/data";

const meta: Meta = {
  title: "Components/Select",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const SelectField: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="select"
        label="Select a topic"
        name="selectOption"
        options={dropdownOptions}
        helper="Please select a topic of your choosing"
        required
      />
    </FormContainer>
  ),
};
export const SelectDisabled: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="select"
        label="Select a topic"
        name="selectOption"
        options={dropdownOptions}
        helper="Please select a topic of your choosing"
        disabled
        required
      />
    </FormContainer>
  ),
};

export const InColumns: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldWrapper cols={2}>
        <FieldControl
          control="select"
          label="Select a topic"
          name="selectOption"
          options={dropdownOptions}
          helper="Please select a topic of your choosing"
          required
        />
        <FieldControl
          control="select"
          label="Select a topic"
          name="selectOption"
          options={dropdownOptions}
          helper="Please select a topic of your choosing"
          required
        />
      </FieldWrapper>
    </FormContainer>
  ),
};

export const SizeOptions: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="select"
        label="Select a topic"
        name="selectOption"
        options={dropdownOptions}
        helper="Please select a topic of your choosing"
        required
        maxWidth="xl"
      />
      <FieldControl
        control="select"
        label="Select a topic"
        name="selectOption"
        options={dropdownOptions}
        helper="Please select a topic of your choosing"
        required
        maxWidth="lg"
      />
      <FieldControl
        control="select"
        label="Select a topic"
        name="selectOption"
        options={dropdownOptions}
        helper="Please select a topic of your choosing"
        required
        maxWidth="md"
      />
      <FieldControl
        control="select"
        label="Select a topic"
        name="selectOption"
        options={dropdownOptions}
        helper="Please select a topic of your choosing"
        required
        maxWidth="sm"
      />
    </FormContainer>
  ),
};
