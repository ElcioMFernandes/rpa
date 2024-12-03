import { ReactNode } from 'react';

interface LabelProps {
  children: ReactNode;
  htmlFor?: string;
  className?: string;
}

function Label(props: LabelProps) {
  return <label htmlFor={props.htmlFor}>{props.children}</label>;
}

export default Label;