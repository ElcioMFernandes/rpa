import Label from "./Label";

interface LabelProps {
    type: string;
    label?: string;
    labelClassName?: string;
    inputClassName?: string;
    placeholder?: string;
}

function Input (props:LabelProps) {
    return (
        <>
        <Label className={props.labelClassName}>{props.label}</Label>
        <input className={props.inputClassName} type={props.type} placeholder={props.placeholder}/>
        </>
    );
}