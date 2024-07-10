type BgColor = 'bg-bgBtnSecondary' | 'bg-bgLateralcolumn';

type TextColor = 'text-white' | 'text-black';

interface Props {
  text?: string;
  className?: string;
  bgColor?: BgColor;
  textColor?: TextColor;
}

export const Button = ({ text = 'Comprar', className = '', bgColor = 'bg-bgBtnSecondary', textColor = 'text-white' }: Props) => {
  return (
    <button className={`py-2 sm:py-3 md:py-3 rounded-xl w-full ${className} ${bgColor} ${textColor}`}>
      {text}
    </button>
  );
};
