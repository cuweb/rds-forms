import type { Meta, StoryObj } from "@storybook/react";
import { FormContainer } from "../components/FormContainer/FormContainer";
import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";
import { FieldControl } from "../components/FieldControl/FieldControl";

const meta: Meta = {
  title: "Components/Input",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const InputField: Story = {
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
};

export const InColumns: Story = {
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
};

export const SizeOptions: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="input"
        type="text"
        label="Your Name"
        name="yourname"
        placeholder="Enter your name"
        helper="Enter your name"
        maxWidth="xl"
        required
      />
      <FieldControl
        control="input"
        type="text"
        label="Your Name"
        name="yourname"
        placeholder="Enter your name"
        helper="Enter your name"
        maxWidth="lg"
        required
      />
      <FieldControl
        control="input"
        type="text"
        label="Your Name"
        name="yourname"
        placeholder="Enter your name"
        helper="Enter your name"
        maxWidth="md"
        required
      />
      <FieldControl
        control="input"
        type="text"
        label="Your Name"
        name="yourname"
        placeholder="Enter your name"
        helper="Enter your name"
        maxWidth="sm"
        required
      />
    </FormContainer>
  ),
};
