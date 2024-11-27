import React from "react";
import { FormProps } from "../interfaces/FormProps";
import { Input } from "./Input";

export const Form: React.FC<FormProps> = (props) => {
  return (
    <form>
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <Input
              type={child.props.type}
              id={child.props.id}
              placeholder={child.props.placeholder}
            >
              {child.props.children}
            </Input>
          );
        }
        return null;
      })}
    </form>
  );
};
