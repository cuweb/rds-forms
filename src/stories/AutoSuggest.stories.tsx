import type { Meta, StoryObj } from "@storybook/react";
import { FormContainer } from "../components/FormContainer/FormContainer";
import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";
import { FieldControl } from "../components/FieldControl/FieldControl";
import { dropdownAutoSuggest } from "../data/data";

const meta: Meta = {
  title: "Components/AutoSuggest",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const AutoSuggestField: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="autosuggest"
        label="Select a topic"
        name="selectOption"
        options={dropdownAutoSuggest}
        helper="Please select a topic of your choosing"
        required
      />
    </FormContainer>
  ),
};

export const AutoSuggestDisabled: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldControl
        control="autosuggest"
        label="Select a topic"
        name="selectOption"
        options={dropdownAutoSuggest}
        helper="Please select a topic of your choosing"
        required
        disabled
      />
    </FormContainer>
  ),
};

export const InColumns: Story = {
  render: (args) => (
    <FormContainer {...args}>
      <FieldWrapper cols={2}>
        <FieldControl
          control="autosuggest"
          label="Select a topic"
          name="selectOption"
          options={dropdownAutoSuggest}
          helper="Please select a topic of your choosing"
          required
        />
        <FieldControl
          control="autosuggest"
          label="Select a topic"
          name="selectOption"
          options={dropdownAutoSuggest}
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
        control="autosuggest"
        label="Select a topic"
        name="selectOption"
        options={dropdownAutoSuggest}
        helper="Please select a topic of your choosing"
        required
        maxWidth="xl"
      />
      <FieldControl
        control="autosuggest"
        label="Select a topic"
        name="selectOption"
        options={dropdownAutoSuggest}
        helper="Please select a topic of your choosing"
        required
        maxWidth="lg"
      />
      <FieldControl
        control="autosuggest"
        label="Select a topic"
        name="selectOption"
        options={dropdownAutoSuggest}
        helper="Please select a topic of your choosing"
        required
        maxWidth="md"
      />
      <FieldControl
        control="autosuggest"
        label="Select a topic"
        name="selectOption"
        options={dropdownAutoSuggest}
        helper="Please select a topic of your choosing"
        required
        maxWidth="sm"
      />
    </FormContainer>
  ),
};
