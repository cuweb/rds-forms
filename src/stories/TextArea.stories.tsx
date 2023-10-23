import type { Meta, StoryObj } from "@storybook/react";
import { FormContainer } from "../components/FormContainer/FormContainer";
import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";
import { FieldControl } from "../components/FieldControl/FieldControl";

const meta: Meta = {
  title: "Components/TextArea",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const TextAreaField: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="textarea"
        label="Description"
        name="description"
        rows="5"
        placeholder="Please describe"
        helper="Enter a description"
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
          control="textarea"
          label="Description"
          name="description"
          rows="5"
          placeholder="Please describe"
          helper="Enter a description"
          required
        />
        <FieldControl
          control="textarea"
          label="Description"
          name="description"
          rows="5"
          placeholder="Please describe"
          helper="Enter a description"
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
        control="textarea"
        label="Description"
        name="description"
        rows="5"
        placeholder="Please describe"
        helper="Enter a description"
        maxWidth="xl"
        required
      />
      <FieldControl
        control="textarea"
        label="Description"
        name="description"
        rows="5"
        placeholder="Please describe"
        helper="Enter a description"
        maxWidth="lg"
        required
      />
      <FieldControl
        control="textarea"
        label="Description"
        name="description"
        rows="5"
        placeholder="Please describe"
        helper="Enter a description"
        maxWidth="md"
        required
      />
      <FieldControl
        control="textarea"
        label="Description"
        name="description"
        rows="5"
        placeholder="Please describe"
        helper="Enter a description"
        maxWidth="sm"
        required
      />
    </FormContainer>
  ),
};
