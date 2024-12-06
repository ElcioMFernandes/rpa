import { InputProps } from "@/interface/InputProps";

function Input(props: InputProps) {
  return (
    <input
      className={props.inputClassName}
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
    />
  );
}

export default Input;
