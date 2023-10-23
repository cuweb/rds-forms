import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { Select } from "../Select/Select";

interface FieldControlProps {
  control: string;
  [key: string]: any;
}

export const FieldControl = (props: FieldControlProps) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input label={rest.label} name={rest.name} {...rest} />;
    case "textarea":
      return <TextArea label={rest.label} name={rest.name} {...rest} />;
    case "select":
      return <Select label={rest.label} name={rest.name} {...rest} />;
    default:
      return null;
  }
};
