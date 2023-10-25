import type { Meta, StoryObj } from "@storybook/react";
import { FormContainer } from "../components/FormContainer/FormContainer";
import { FieldControl } from "../components/FieldControl/FieldControl";
import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";

const meta: Meta = {
  title: "Components/FileUpload",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const FileUpload: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="fileUpload"
        label="File Upload"
        name="fileUpload"
        helper="Please select a file for upload"
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
          control="fileUpload"
          label="File Upload"
          name="fileUpload"
          helper="Please select a file for upload"
          required
        />
        <FieldControl
          control="fileUpload"
          label="File Upload"
          name="fileUpload"
          helper="Please select a file for upload"
          required
        />
      </FieldWrapper>
    </FormContainer>
  ),
};
