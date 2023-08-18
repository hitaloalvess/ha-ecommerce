import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ISlider extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Slider = ({ children, ...rest }: ISlider) => {
  return (
    <div
      {...rest}
      className={twMerge(' relative w-screen h-[560px] flex items-center', (rest.className || []))}
    >
      {children}
    </div>
  );
};

export default Slider;
