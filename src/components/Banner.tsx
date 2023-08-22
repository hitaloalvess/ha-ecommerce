import { useRef, useEffect, useState } from 'react';

interface IBannerData {
  id: string;
  title: string;
  label: string;
  backgrounds: {
    id: string;
    src: string;
    alt: string;
  }[];
  coverSrc: string;
  logoSrc: string;
  description: string;
}

interface IBanner {
  data: IBannerData
}

import Slider from './Slider';

const INTERVAL_BG = 8; //8ms

const Banner = ({ data: { backgrounds } }: IBanner) => {

  const [currentBg, setCurrentBg] = useState(0);
  const intervalId = useRef<NodeJS.Timer | null>(null);

  const handleNextBg = (nextPos?: number) => {

    setCurrentBg(prevBg => {
      const newPosBg = nextPos ? nextPos : prevBg + 1;

      if (newPosBg > backgrounds.length - 1) return 0;

      return newPosBg;
    })
  }

  useEffect(() => {

    intervalId.current = setInterval(() => {
      handleNextBg();
    }, INTERVAL_BG * 1000);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    }
  }, [])

  return (

    <div
      className='relative w-full h-full'
    >
      <Slider.Container>


        <Slider.ListItems currentItem={currentBg}>
          {
            backgrounds.map(bg => (
              <div key={bg.id} className='absolute top-0 left-0 w-full h-full bg-center'>
                <img
                  className='w-full h-full object-cover'
                  src={bg.src}
                  alt={bg.alt}
                />
              </div>
            ))
          }
        </Slider.ListItems>


        <Slider.Controls
          className='absolute right-6 flex-col gap-11'
        >
          {
            backgrounds.map((_, index) => (
              <Slider.Button
                key={index}
                data-active={currentBg === index}
                handleClick={() => handleNextBg(index)}
              />

            ))
          }
        </Slider.Controls>

      </Slider.Container>
    </div>


  );
};

export default Banner;
