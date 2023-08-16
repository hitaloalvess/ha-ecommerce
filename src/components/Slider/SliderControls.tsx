import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ISliderControls extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[];
}

const SliderControls = ({ children, ...rest }: ISliderControls) => {
  return (
    <div
      {...rest}
      className={twMerge('absolute flex z-20', (rest.className || []))}
    >
      {children}
    </div>
  );
};

export default SliderControls;
