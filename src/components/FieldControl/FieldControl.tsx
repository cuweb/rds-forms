import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { Select } from "../Select/Select";
import { Checkbox } from "../Checkbox/Checkbox";
import { Radio } from "../Radio/Radio";
import { AutoSuggest } from "../AutoSuggest/AutoSuggest";
import { DateTime } from "../DateTime/DateTime";


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
    case "checkbox":
      return <Checkbox label={rest.label} name={rest.name} {...rest} />;
    case "radio":
      return <Radio label={rest.label} name={rest.name} {...rest} />;
    case "autoSuggest":
      return <AutoSuggest label={rest.label} name={rest.name} {...rest} />;
    case "datetime":
      return <DateTime label={rest.label} name={rest.name} {...rest} />;
    default:
      return null;
  }
};
