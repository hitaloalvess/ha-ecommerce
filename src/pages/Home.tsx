import { useState } from 'react';

import Slider from '@/components/Slider';
import Banner from '@/components/Banner';

const Home = () => {

  const [banners] = useState([
    {
      id: '1',
      name: 'Spider Man',
      Element: Banner.SpiderMan
    },
    {
      id: '2',
      name: 'Iron Man',
      Element: Banner.IronMan
    },
    {
      id: '3',
      name: 'God Of War',
      Element: Banner.GodOfWar
    },

  ])
  const [currentPosBanner, setCurrentPosBanner] = useState<number>(0);

  const handleNextBanner = () => {
    setCurrentPosBanner(prevBanner => {
      const newPosBanner = prevBanner + 1;

      if (newPosBanner > banners.length - 1) return 0;

      return newPosBanner
    })
  }

  return (
    <Slider.Container>
      <Slider.ListItems currentItem={currentPosBanner}>
        {
          banners.map(({ id, Element }) => (
            <Element key={id} />
          ))
        }
      </Slider.ListItems>

      <div
        className="fixed top-1/4 left-0 w-screen flex justify-between"
      >
        <Slider.Button
          handleClick={handleNextBanner}
        >
          {'>'}
        </Slider.Button>

      </div>
    </Slider.Container>
  );
};

export default Home;
