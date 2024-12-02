interface LiProps {
    children: React.ReactNode;
  }
  
function Li(props: LiProps) {
  
    return <li>{props.children}</li>;
  
  };

export default Li;