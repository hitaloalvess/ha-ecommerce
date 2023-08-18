import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Slider from '@/components/Slider';
import Banner from '@/components/Banner';

const Home = () => {

  const [banners] = useState([
    {
      id: 0,
      name: 'Spider Man',
      Element: Banner.SpiderMan
    },
    {
      id: 1,
      name: 'Iron Man',
      Element: Banner.IronMan
    },
    // {
    //   id: 2,
    //   name: 'God Of War',
    //   Element: Banner.GodOfWar
    // },

  ])
  const [currentPosBanner, setCurrentPosBanner] = useState<number>(0);

  const handleNextBanner = () => {
    setCurrentPosBanner(prevBanner => {
      const newPosBanner = prevBanner + 1;

      if (newPosBanner > banners.length - 1) return 0;

      return newPosBanner
    })
  }

  const CurrentBanner = useMemo(() => {
    const banner = banners[currentPosBanner]
    const Element = banner.Element;

    return Element;
  }, [currentPosBanner]);

  return (
    <Slider.Container>

      <AnimatePresence
        mode='popLayout'
      >
        {
          <motion.div
            key={banners[currentPosBanner].id}
            initial={{ x: 1440, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, x: -1440 }}
            transition={{ duration: 3 }}

          >
            <CurrentBanner keyValue={currentPosBanner} />
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
};

export default Home;
