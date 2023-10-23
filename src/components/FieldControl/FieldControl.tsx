import { Input } from "../Input/Input";

interface FieldControlProps {
  control: string;
  [key: string]: any;
}

export const FieldControl = (props: FieldControlProps) => {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <Input label={rest.label} name={rest.name} {...rest}  />;
    default:
      return null;
  }
}
