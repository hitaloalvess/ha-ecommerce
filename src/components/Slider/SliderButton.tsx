import { ReactNode } from "react";

interface ISliderButton {
  handleClick: () => void;
  children: ReactNode;
}

const SliderButton = ({ handleClick, children }: ISliderButton) => {
  return (
    <button
      className="fixed top-1/4 right-8 text-7xl text-green-500"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default SliderButton;
