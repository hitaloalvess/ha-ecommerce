
import Slider from '@/components/Slider';

interface IBannerBackgrounds {
  currentBg: number;
  backgrounds: {
    id: string;
    src: string;
    alt: string;
  }[];
}

const BannerBackgrounds = ({ currentBg, backgrounds }: IBannerBackgrounds) => {
  return (
    <Slider.ListItems currentItem={currentBg}>
      {
        backgrounds.map(bg => (
          <div key={bg.id} className={`absolute top-0 left-0 w-full h-full bg-center`}>
            <img
              className='w-full h-full object-cover'
              src={bg.src}
              alt={bg.alt}
            />

            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-shadow-dark"></div>
          </div>
        ))
      }
    </Slider.ListItems>
  );
};

export default BannerBackgrounds;
