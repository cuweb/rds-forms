import type { Meta, StoryObj } from "@storybook/react";
import { FormContainer } from "../components/FormContainer/FormContainer";
import { FieldControl } from "../components/FieldControl/FieldControl";

const meta: Meta = {
  title: "Components/DateTimePicker",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const DateTimePicker: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="dateTimePicker"
        label="Date Time"
        name="dateTime"
        helper="please select the Start Date "
        required
      />
    </FormContainer>
  ),
};
