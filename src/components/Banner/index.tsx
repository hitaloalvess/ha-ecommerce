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

import Slider from '../Slider';
import BannerBackgrounds from './BannerBackgrounds';
import BannerControls from './BannerControls';
import BannerContent from './BannerContent';

const INTERVAL_BG = 8; //8ms

const Banner = ({ data }: IBanner) => {

  const {
    backgrounds,
    label,
    coverSrc,
    logoSrc,
    description
  } = data;

  const [currentBg, setCurrentBg] = useState(0);
  const intervalId = useRef<NodeJS.Timer | null>(null);

  const handleNextBg = (nextPos?: number) => {

    setCurrentBg(prevBg => {
      const newPosBg = nextPos || nextPos === 0 ? nextPos : prevBg + 1;

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

        <BannerBackgrounds
          backgrounds={backgrounds}
          currentBg={currentBg}
        />

        <BannerContent
          nameContent={label}
          imgCover={coverSrc}
          imgLogo={logoSrc}
          description={description}
        />

        <BannerControls
          qtdItens={backgrounds.length}
          idItemActive={currentBg}
          click={handleNextBg}
        />

      </Slider.Container>
    </div>


  );
};

export default Banner;
