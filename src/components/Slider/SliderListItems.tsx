import {
  ReactNode,
  Children,
} from "react";
import Slider from ".";

interface ISliderListItems {
  currentItem: number;
  children: ReactNode[];
}


const SliderListItems = ({ currentItem, children }: ISliderListItems) => {

  return (
    <div
      className="relative w-fit h-full flex scroll-smooth bg-orange-500"
    >
      {Children.map(children, (child, index) => {

        return (
          <Slider.Item
            id={`${index}`}
            className={`absolute top-0 left-0 transition-opacity duration-[1500ms] ${currentItem !== index ? 'opacity-0' : 'opacity-100'}`}
          >
            {child}
          </Slider.Item>
        )
      })}

    </div>
  );
};

export default SliderListItems;
