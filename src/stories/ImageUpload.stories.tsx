import type { Meta, StoryObj } from "@storybook/react";
import { FormContainer } from "../components/FormContainer/FormContainer";
import { FieldControl } from "../components/FieldControl/FieldControl";
import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";

const meta: Meta = {
  title: "Components/ImageUpload",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const ImageUpload: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="imageUpload"
        label="Image Upload"
        name="imageUpload"
        helper="Please select a image for upload"
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
          control="imageUpload"
          label="Image Upload"
          name="imageUpload"
          helper="Please select a image for upload"
          required
        />
        <FieldControl
          control="imageUpload"
          label="Image Upload"
          name="imageUpload"
          helper="Please select a image for upload"
          required
        />
      </FieldWrapper>
    </FormContainer>
  ),
};
