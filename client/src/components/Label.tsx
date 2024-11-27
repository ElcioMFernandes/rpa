import { LabelProps } from "../interfaces/LabelProps";

export const Label: React.FC<LabelProps> = (props) => {
  return <label htmlFor={props.htmlFor}>{props.children}</label>;
};
