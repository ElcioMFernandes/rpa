import { ReactNode } from 'react';
import { LabelProps } from '@/interface/LabelProps';

function Label(props: LabelProps) {
  return <label htmlFor={props.htmlFor}>{props.children}</label>;
}

export default Label;