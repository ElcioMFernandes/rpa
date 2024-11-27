import { ReactNode } from "react";

export interface InputProps {
  id?: string;
  max?: string;
  min?: string;
  type: string;
  size?: number;
  value?: string;
  pattern?: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
  maxlength?: number;
  placeholder?: string;
  children: ReactNode;
  className?: string;
}
