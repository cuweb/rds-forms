import type { Meta, StoryObj } from "@storybook/react";
import { FormContainer } from "../components/FormContainer/FormContainer";
import { FieldControl } from "../components/FieldControl/FieldControl";

const meta: Meta = {
  title: "Components/Date & Time",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const DateTimeField: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="datetime"
        label="Date Time"
        name="datetime"
        helper="please select the Start Date "
        required
        maxWidth="sm"
      />
    </FormContainer>
  ),
};

export const DateTimeDisabled: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="datetime"
        label="Date Time"
        name="datetime"
        helper="please select the Start Date "
        maxWidth="sm"
        disabled
      />
    </FormContainer>
  ),
};

export const FormatChange: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="datetime"
        label="Date Time"
        name="datetime"
        helper="please select the Start Date "
        dateFormat="dd/MM/yyyy"
        required
        maxWidth="sm"
      />
    </FormContainer>
  ),
};
export const ShowTime: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="datetime"
        label="Date Time"
        name="datetime"
        dateFormat="dd/MM/yyyy HH:mm"
        helper="please select the Start Date "
        maxWidth="sm"
        showTime
      />
    </FormContainer>
  ),
};

export const MinDate: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="datetime"
        label="Date Time"
        name="datetime"
        dateFormat="dd/MM/yyyy HH:mm"
        helper="please select the Start Date "
        maxWidth="sm"
        customMinDate={new Date()}
        showTime
      />
    </FormContainer>
  ),
};
