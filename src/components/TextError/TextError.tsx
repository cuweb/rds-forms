import { ReactNode } from 'react';

interface TextErrorProps {
  children: ReactNode;
}

function TextError(props: TextErrorProps) {
  return (
    <div className="font-semibold error text-cu-red">
      {props.children}
    </div>
  );
}

export default TextError;
