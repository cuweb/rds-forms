import type { Meta, StoryObj } from "@storybook/react";
import { FormContainer } from "../components/FormContainer/FormContainer";
import { FieldControl } from "../components/FieldControl/FieldControl";
import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";

const meta: Meta = {
  title: "Components/WYSIWYG",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const WYSIWYG: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="wysiwyg"
        label="WYSIWYG"
        name="wysiwyg"
        helper="Text Area with WYSIWYG"
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
          control="wysiwyg"
          label="WYSIWYG"
          name="wysiwyg"
          helper="Text Area with WYSIWYG"
          required
        />
        <FieldControl
          control="wysiwyg"
          label="WYSIWYG"
          name="wysiwyg"
          helper="Text Area with WYSIWYG"
          required
        />
      </FieldWrapper>
    </FormContainer>
  ),
};
