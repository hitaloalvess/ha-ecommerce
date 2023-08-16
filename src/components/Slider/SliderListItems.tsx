import {
  ReactNode,
  Children,
  useState,
  useMemo
} from "react";
import Slider from ".";

interface ISliderListItems {
  children: ReactNode[]
}


const SliderListItems = ({ children }: ISliderListItems) => {
  const [currentPosBanner, setCurrentPosBanner] = useState(0);

  const numberOfChildren = useMemo(() => Children.count(children), [Children])

  const handleNextBanner = () => {
    setCurrentPosBanner(prevBanner => {
      const newPosBanner = prevBanner + 1;

      if (newPosBanner > numberOfChildren - 1) return 0;

      return newPosBanner
    })
  }

  return (
    <div
      className="relative w-fit h-full flex scroll-smooth"
    >
      {Children.map(children, (child, index) => {

        return (
          <Slider.Item
            id={`${index}`}
            className={`absolute top-0 left-0 transition-opacity duration-[1500ms] ${currentPosBanner !== index ? 'opacity-0' : 'opacity-100'}`}
          >
            {child}
          </Slider.Item>
        )
      })}

      <div
        className="fixed top-1/4 left-0 w-screen flex justify-between"
      >
        <Slider.Button
          handleClick={handleNextBanner}
        >
          {'>'}
        </Slider.Button>

      </div>
    </div>
  );
};

export default SliderListItems;
