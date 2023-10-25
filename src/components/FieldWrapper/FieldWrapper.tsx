import { gridColsClass } from "../../helpers/optionClasses";

export interface FieldWrapperProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
}

export const FieldWrapper = ({ children, cols }: FieldWrapperProps) => {
  const gridSpacing = cols ? gridColsClass[cols] : "space-y-5";
  return <div className={`grid ${gridSpacing} gap-5`}>{children}</div>;
};

export default FieldWrapper;
