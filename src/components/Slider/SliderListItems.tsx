import { ReactElement, Children, useState, useRef, RefObject } from "react";
import Slider from ".";

interface ISliderListItems {
  children: ReactElement[]
}
const SliderListItems = ({ children }: ISliderListItems) => {
  const [itemRefs, setItemRefs] = useState<RefObject<any>[]>([]);

  const handleRefStorage = (ref: RefObject<any>) => {

    setItemRefs(prevItemRefs => {
      const newListRefs = prevItemRefs.filter(item => item.current.id !== ref.current.id);

      return [...newListRefs, ref];
    });
  }

  return (
    <div
      className="w-fit h-full flex bg-yellow-400"
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
    </div>
  );
};

export default SliderListItems;
