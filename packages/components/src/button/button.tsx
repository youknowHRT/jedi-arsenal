import React, { PropsWithChildren } from "react";
import cs from "classnames";
export interface ButtonProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({className,...props})=>{
  const cn = cs('ja-button',className)
  return <button className={cn} {...props} />
}

export {Button}