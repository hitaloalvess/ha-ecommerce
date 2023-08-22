import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Slider from '@/components/Slider';
import Banner from '@/components/Banner';

import { bannerList } from '@/data/banners';

const Carousel = () => {
  const [currentPosBanner, setCurrentPosBanner] = useState<number>(0);

  const handleNextBanner = () => {
    setCurrentPosBanner(prevBanner => {
      const newPosBanner = prevBanner + 1;

      if (newPosBanner > bannerList.length - 1) return 0;

      return newPosBanner
    })
  }

  const currentBanner = useMemo(() => bannerList[currentPosBanner], [currentPosBanner]);

  return (
    <Slider.Container className='overflow-hidden'>

      <AnimatePresence
        mode='popLayout'
      >
        {
          <motion.div
            key={bannerList[currentPosBanner].id}
            initial='initial'
            animate='animate'
            exit='exit'
            variants={{
              initial: {
                x: window.innerWidth,
                opacity: 0,
              },
              animate: {
                x: 0,
                opacity: 1,
                transition: {
                  opacity: { duration: 2 },
                  x: { duration: 2.5 },
                }
              },
              exit: {
                opacity: 0,
                x: -window.innerWidth,
                transition: {
                  opacity: { duration: 3 },
                  x: { duration: 2.5 }
                }
              }
            }}
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
