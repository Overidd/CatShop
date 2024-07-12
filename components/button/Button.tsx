import React from "react";

type BgColor = 'bg-bgBtnSecondary' | 'bg-bgLateralcolumn';

type TextColor = 'text-white' | 'text-black';
type TypeButton = 'submit' | 'reset' | 'button';
interface Props {
  text?: string;
  className?: string;
  bgColor?: BgColor;
  textColor?: TextColor;
  type?: TypeButton;
  onChange?: () => void;
  children?: React.ReactNode;
}

export const Button = ({ text = 'Comprar', className = 'py-2 sm:py-3 md:py-3', bgColor = 'bg-bgBtnSecondary', textColor = 'text-white', onChange, type, children }: Props) => {
  return (
    <button
      className={` rounded-xl w-full space-x-2 ${className} ${bgColor} ${textColor}`}
      type={type}
      onClick={onChange}>
      <span className="align-middle">{text}</span>
      <span className="align-middle">{children}</span>
    </button>
  );
};
