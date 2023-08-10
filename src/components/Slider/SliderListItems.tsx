import {
  ReactNode,
  Children,
  useState,
  useRef,
  RefObject,
  useEffect
} from "react";
import Slider from ".";

interface ISliderListItems {
  children: ReactNode[]
}
const SliderListItems = ({ children }: ISliderListItems) => {

  const [itemRefs, setItemRefs] = useState<RefObject<any>[]>([]);
  const [currentBanner, setCurrentBanner] = useState(0);

  const handleRefStorage = (ref: RefObject<any>) => {

    setItemRefs(prevItemRefs => {
      const newListRefs = prevItemRefs.filter(item => item.current.id !== ref.current.id);

      return [...newListRefs, ref];
    });
  }

  const handleNextBanner = () => {
    setCurrentBanner(prev => {
      const newValue = prev + 1;

      if (newValue >= itemRefs.length) return 0;

      return newValue;
    });
  }

  useEffect(() => {
    const banner = itemRefs[currentBanner];

    banner?.current.scrollIntoView({
      behavior: 'smooth'
    });

  }, [currentBanner, itemRefs]);

  return (
    <div
      className="w-fit h-full flex bg-yellow-400 scroll-smooth"
    >
      {Children.map(children, (child, index) => {

        const newRef = useRef(null);

        return (
          <Slider.Item
            id={`${index}`}
            ref={newRef}
            saveRef={handleRefStorage}
          >
            {child}
          </Slider.Item>
        )
      })}

      <Slider.Button
        handleClick={handleNextBanner}
      >
        {'>'}
      </Slider.Button>
    </div>
  );
};

export default SliderListItems;
