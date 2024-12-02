import React, { ReactNode } from "react";
import Li from "./Li";

interface UlProps {
  children: ReactNode;
  className?: string;
}

function Ul (props: UlProps) {
  return (
    <ul className={props.className}>
      {React.Children.map(props.children, (child) => (
        <Li >{child}</Li>
      ))}
    </ul>
  );
};

export default Ul;