import { useEffect, useRef, useState } from 'react';

import banner1 from '@/assets/banners/spider-man/spider-man1.webp'
import banner2 from '@/assets/banners/spider-man/spider-man2.jpg'
import banner3 from '@/assets/banners/spider-man/spider-man3.jpg'
import banner4 from '@/assets/banners/spider-man/spider-man4.jpg'

import IBanner from './interfaces/IBanner';
import Slider from '../Slider';

const INTERVAL_BANNERS = 6; //4ms

const BannerSpiderMan = ({ isVisible, keyValue }: IBanner) => {
  console.log({ isVisible, keyValue });

  const [bgImages] = useState([
    {
      id: '1',
      src: banner1,
      alt: 'Banner 1 - Cena do jogo em que o homem aranha se prepara para atacar um inimigo'
    },
    {
      id: '2',
      src: banner2,
      alt: 'Banner 2 - Cena do jogo em que o homem aranha está escalando uma parede com seu traje preto'

    },
    {
      id: '3',
      src: banner3,
      alt: 'Banner 3 - Cena do jogo em que o homem aranha se prepara para chutar um inimigo'
    },
    {
      id: '4',
      src: banner4,
      alt: 'Banner 4 - Cena do jogo em que homem aranha está pulando de um predio'
    }
  ]);
  const [currentBg, setCurrentBg] = useState(0);
  // const intervalId = useRef<NodeJS.Timer | null>(null);

  const handleNextBg = (nextPos?: number) => {

    setCurrentBg(prevBg => {
      const newPosBg = nextPos ? nextPos : prevBg + 1;

      if (newPosBg > bgImages.length - 1) return 0;

      return newPosBg;
    })
  }

  // useEffect(() => {

  //   intervalId.current = setInterval(() => {
  //     handleNextBg();
  //   }, INTERVAL_BANNERS * 1000);

  //   // return () => {
  //   //   console.log('Destruindo banner');
  //   //   if (intervalId.current) {
  //   //     clearInterval(intervalId.current);
  //   //   }
  //   // }
  // }, [])

  return (

    <div
      className='relative w-full h-full'
    >
      <Slider.Container>


        <Slider.ListItems currentItem={currentBg}>
          {
            bgImages.map(bg => (
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
            bgImages.map((_, index) => (
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

export default BannerSpiderMan;
