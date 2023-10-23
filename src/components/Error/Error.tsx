import { ReactNode } from "react";

interface ErrorProps {
  children: ReactNode;
}

function Error(props: ErrorProps) {
  return (
    <div className="font-semibold error text-cu-red">{props.children}</div>
  );
}

export default Error;
