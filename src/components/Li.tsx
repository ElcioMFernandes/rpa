import { LiProps } from "@/interface/LiProps";

function Li(props: LiProps) {
    return <li>{props.children}</li>;
  };

export default Li;