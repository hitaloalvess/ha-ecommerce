import { ReactNode } from "react";

interface ISlider {
  children: ReactNode
}

const Slider = ({ children }: ISlider) => {
  return (
    <div
      className="w-screen h-[600px] flex items-center bg-red-600"
    >
      {children}
    </div>
  );
};

export default Slider;
