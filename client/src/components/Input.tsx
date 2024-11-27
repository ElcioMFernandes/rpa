import { InputProps } from "../interfaces/InputProps";
import { Label } from "./Label";

export const Input: React.FC<InputProps> = (props) => {
  const defaultClasses = "bg-red-500";
  return (
    <div>
      <Label htmlFor={props.id}>{props.children}</Label>
      <input
        id={props.id}
        type={props.type}
        max={props.max}
        min={props.min}
        size={props.size}
        value={props.value}
        pattern={props.pattern}
        readOnly={props.readonly}
        disabled={props.disabled}
        required={props.required}
        maxLength={props.maxlength}
        placeholder={props.placeholder}
        className={props.className ? props.className : defaultClasses}
      />
    </div>
  );
};
