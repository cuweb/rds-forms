import type { Meta, StoryObj } from "@storybook/react";
import { FormContainer } from "../components/FormContainer/FormContainer";
import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";
import { FieldControl } from "../components/FieldControl/FieldControl";
import { radioOptions } from "../data/data";

const meta: Meta = {
  title: "Components/Radio",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const RadioField: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="radio"
        label="Radio topic"
        name="radioOption"
        options={radioOptions}
        helper="Please select a thing"
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
          control="radio"
          label="Radio topic"
          name="radioOption"
          options={radioOptions}
          helper="Please select a thing"
          required
        />
        <FieldControl
          control="radio"
          label="Radio topic"
          name="radioOption"
          options={radioOptions}
          helper="Please select a thing"
          required
        />
      </FieldWrapper>
    </FormContainer>
  ),
};

export const InlineOptions: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="radio"
        label="Radio topic"
        name="radioOption"
        options={radioOptions}
        helper="Please select a thing"
        isInline
        required
      />
    </FormContainer>
  ),
};
