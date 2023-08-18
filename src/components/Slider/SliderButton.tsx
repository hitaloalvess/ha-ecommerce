import { HTMLAttributes } from 'react';

interface ISliderButton extends HTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
}

const SliderButton = ({ handleClick, ...rest }: ISliderButton) => {
  return (
    <button
      {...rest}
      className="w-3 h-3 rounded-full bg-customWhite50% transition-all duration-700 data-[active=true]:w-4 data-[active=true]:h-4 data-[active=true]:bg-white"
      onClick={handleClick}
    >
    </button>
  );
};

export default SliderButton;
