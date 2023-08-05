import Slider from '@/components/Slider';
import Banner from '@/components/Banner';

const Home = () => {
  return (
    <Slider.Container>
      <Slider.ListItems>
        <Banner.SpiderMan />
        <Banner.IronMan />
        <Banner.GodOfWar />
      </Slider.ListItems>
    </Slider.Container>
  );
};

export default Home;
