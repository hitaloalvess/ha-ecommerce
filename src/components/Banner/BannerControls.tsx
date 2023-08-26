import Slider from '@/components/Slider';

interface IBannerControls {
  qtdItens: number;
  idItemActive: number;
  click: (nextPos: number) => void;
}

const BannerControls = ({ qtdItens, idItemActive, click }: IBannerControls) => {

  return (
    <Slider.Controls
      className='absolute right-6 flex-col gap-11'
    >
      {
        new Array(qtdItens).fill(null).map((_, index) => (
          <Slider.Button
            key={index}
            data-active={idItemActive === index}
            handleClick={() => click(index)}
          />

        ))
      }
    </Slider.Controls>
  );
};

export default BannerControls;
