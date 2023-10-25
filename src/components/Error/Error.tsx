import { ReactNode } from 'react'

export interface ErrorProps {
  children: ReactNode
}

export const Error = ({ ...props }: ErrorProps) => {
  return <div className="font-semibold error text-cu-red">{props.children}</div>
}

export default Error
