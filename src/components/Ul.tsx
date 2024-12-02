import React, { ReactNode } from "react";
import Li from "./Li";

interface UlProps {
  children: ReactNode;
}

function Ul (props: UlProps) {
  return (
    <ul>
      {React.Children.map(props.children, (child) => (
        <Li >{child}</Li>
      ))}
    </ul>
  );
};

export default Ul;