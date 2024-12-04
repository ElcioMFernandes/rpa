import Label from "./Label";
import { InputProps } from "@/interface/InputProps";

function Input (props:InputProps) {
    return (
        <>
        <Label className={props.labelClassName}>{props.label}</Label>
        <input className={props.inputClassName} type={props.type} placeholder={props.placeholder}/>
        </>
    );
}

export default Input;