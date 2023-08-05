import {
  ReactElement,
  Ref,
  RefObject,
  forwardRef,
  useEffect,
} from "react";

interface ISliderItem {
  id: string;
  saveRef?: (ref: RefObject<any>) => void;
  children: ReactElement
}

const SliderItem = forwardRef(function SliderItem(
  { id, saveRef, children }: ISliderItem,
  ref: Ref<HTMLDivElement>
) {

  useEffect(() => {

    if (saveRef) {
      saveRef(ref as RefObject<HTMLDivElement>);
    }

  }, []);

  return (
    <div
      id={id}
      className="w-screen h-full"
      ref={ref}
    >
      {children}
    </div>
  );
});

export default SliderItem;
