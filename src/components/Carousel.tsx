import { useState, useMemo, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Slider from '@/components/Slider';
import Banner from '@/components/Banner';

import { bannerList } from '@/data/banners';

const INTERVAL_BANNERS = 30; //30ms
const Carousel = () => {
  const intervalId = useRef<NodeJS.Timer | null>(null);
  const [currentPosBanner, setCurrentPosBanner] = useState<number>(2);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

  const handleNextBanner = () => {
    setCurrentPosBanner(prevBanner => {
      const newPosBanner = prevBanner + 1;

      if (newPosBanner > bannerList.length - 1) return 0;

      return newPosBanner
    })
  }

  const currentBanner = useMemo(() => bannerList[currentPosBanner], [currentPosBanner]);

  // useEffect(() => {

  //   intervalId.current = setInterval(() => {
  //     handleNextBanner();
  //     setShouldAnimate(true);
  //   }, INTERVAL_BANNERS * 1000);


  //   return () => {
  //     if (intervalId.current) {
  //       clearInterval(intervalId.current);
  //     }
  //   }

  // }, []);

  return (
    <Slider.Container className='overflow-hidden'>

      <AnimatePresence
        mode='popLayout'
      >
        {
          <motion.div
            key={bannerList[currentPosBanner].id}
            initial={{
              x: shouldAnimate ? window.innerWidth : 0,
              opacity: 1,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              opacity: 1,
              x: -window.innerWidth,
            }}
            transition={{ duration: 2 }}
          >
            <Banner
              data={currentBanner}
            />
          </motion.div>
        }
      </AnimatePresence>


      <div
        className="fixed top-1/4 left-0 w-screen flex justify-between"
      >
        <Slider.Button
          handleClick={handleNextBanner}
        />

      </div>
    </Slider.Container>
  );
}

export default Carousel;
