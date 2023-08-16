import {
  HTMLAttributes,
  ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";

interface ISliderItem extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  children: ReactNode;
}

const SliderItem = ({ id, children, ...rest }: ISliderItem) => {


  return (
    <div
      id={id}
      {...rest}
      className={twMerge("w-screen h-full", (rest.className || []))}
    >
      {children}
    </div>
  );
};

export default SliderItem;
