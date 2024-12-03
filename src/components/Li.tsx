interface LiProps {
    children: React.ReactNode;
    className?: string;
  }
  
function Li(props: LiProps) {
  
    return <li>{props.children}</li>;
  
  };

export default Li;