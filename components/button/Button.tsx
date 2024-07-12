import React from "react";

type BgColor = 'bg-bgBtnSecondary' | 'bg-bgLateralcolumn' | 'bg-white';

type TextColor = 'text-white' | 'text-[#000a]';
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

export const Button = ({ text = 'Comprar', className, bgColor = 'bg-bgBtnSecondary', textColor = 'text-white', onChange, type, children }: Props) => {
  return (
    <button
      className={` rounded-xl w-full space-x-2 py-2 sm:py-3 md:py-3 ${className} ${bgColor} ${textColor}`}
      type={type}
      onClick={onChange}>
      <span className="align-middle">{text}</span>
      <span className="align-middle">{children}</span>
    </button>
  );
};

export const ButtonGoogle = ({ bgColor, children, className, onChange, text, textColor, type }: Props) => {
  return (
    <button
      className={` rounded-xl w-full space-x-2 py-2 sm:py-3 md:py-3 bg-white text-bgPrimary ${className} ${bgColor} ${textColor}`}
      type={type}
      onClick={onChange}>
      <span className="align-middle">{text}</span>
      <span className="align-middle">
        <GoogleIcon />
      </span>
    </button>
  )
}

const GoogleIcon = () => (
  <div className="w-fit inline-block">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
      <path fill="#4285F4" d="M24 9.5c3.8 0 6.4 1.6 8.2 2.9l6-6C34.4 3.2 29.8 1 24 1 14.8 1 7.4 6.7 4 14.5l7 5.5c2-5.9 7.4-10.5 13-10.5z" />
      <path fill="#34A853" d="M44.5 20H24v8.5h11.6C33 33 29 35 24 35c-5.6 0-10.4-3.4-12.2-8.2l-7 5.5C9 38.4 16 43 24 43c8.4 0 15.5-5.9 17.9-14.1C42.8 26 44.5 23.3 44.5 20z" />
      <path fill="#FBBC05" d="M11.8 27c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7L4.8 12c-1.4 2.8-2.3 5.9-2.3 9.3s.8 6.5 2.3 9.3l7-5.6z" />
      <path fill="#EA4335" d="M24 10c3.5 0 6.2 1.4 8 3.4L38 6.5C34.6 3 29.8 1 24 1 16 1 9.4 5.8 6.2 12.5l7 5.6C15.6 12 19.4 10 24 10z" />
    </svg>
  </div>
);
