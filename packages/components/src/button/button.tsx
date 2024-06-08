import React, { PropsWithChildren } from "react";
import cs from "classnames";
export interface ButtonProps {
  className?: string;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({className,...props})=>{
  const cn = cs('ja-button',className)
  return <button className={cn} {...props} />
}

export default Button