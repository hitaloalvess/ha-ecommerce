
//Spider-Man
import spiderManBg1 from '@/assets/banners/spider-man/spider-man1.webp'
import spiderManBg2 from '@/assets/banners/spider-man/spider-man2.jpg'
import spiderManBg3 from '@/assets/banners/spider-man/spider-man3.jpg'
import spiderManBg4 from '@/assets/banners/spider-man/spider-man4.jpg'
import spiderManCover from '@/assets/banners/spider-man/spider-man-cover.svg';
import spiderManLogo from '@/assets/banners/spider-man/spider-man-logo.svg';

//Iron-Man
import ironManBg1 from '@/assets/banners/iron-man/iron-man1.png';
import ironManBg2 from '@/assets/banners/iron-man/iron-man2.jpg';
import ironManBg3 from '@/assets/banners/iron-man/iron-man3.jpg';
import ironManBg4 from '@/assets/banners/iron-man/iron-man4.jpg';
import ironManCover from '@/assets/banners/iron-man/iron-man-cover.svg';
import ironManLogo from '@/assets/banners/iron-man/iron-man-logo.svg';

//God-Of-War
import godOfWarBg1 from '@/assets/banners/god-of-war/god-of-war1.jpg';
import godOfWarBg2 from '@/assets/banners/god-of-war/god-of-war2.jpg';
import godOfWarBg3 from '@/assets/banners/god-of-war/god-of-war3.jpg';
import godOfWarBg4 from '@/assets/banners/god-of-war/god-of-war4.webp';

export const bannerList = [
  {
    id: '1',
    title: 'Spider-Man',
    label: 'spider-man',
    backgrounds: [
      {
        id: '1',
        src: spiderManBg1,
        alt: 'Banner 1 - Cena do jogo em que o homem aranha se prepara para atacar um inimigo'
      },
      {
        id: '2',
        src: spiderManBg2,
        alt: 'Banner 2 - Cena do jogo em que o homem aranha está escalando uma parede com seu traje preto'

      },
      {
        id: '3',
        src: spiderManBg3,
        alt: 'Banner 3 - Cena do jogo em que o homem aranha se prepara para chutar um inimigo'
      },
      {
        id: '4',
        src: spiderManBg4,
        alt: 'Banner 4 - Cena do jogo em que homem aranha está pulando de um predio'
      }
    ],
    coverSrc: spiderManCover,
    logoSrc: spiderManLogo,
    description: 'Lorem ipsum lorem ipsum, lorem ipsum lorem ipsum lorem ipsum.'
  },
  {
    id: '2',
    title: 'Iron-Man',
    label: 'iron-man',
    backgrounds: [
      {
        id: '1',
        src: ironManBg1,
        alt: 'Banner 1 - Cena do jogo em que o homem de ferro se prepara para atacar um inimigo'
      },
      {
        id: '2',
        src: ironManBg2,
        alt: 'Banner 2 - Imagem do homem de ferro soltando um laiser pela mão'

      },
      {
        id: '3',
        src: ironManBg3,
        alt: 'Banner 3 - Cena do jogo em que o homem de ferro esta em um combate area com naves inimigas'
      },
      {
        id: '4',
        src: ironManBg4,
        alt: 'Banner 4 - Imagem do homem de ferro voando'
      }
    ],
    coverSrc: ironManCover,
    logoSrc: ironManLogo,
    description: 'Lorem ipsum lorem ipsum, lorem ipsum lorem ipsum lorem ipsum.'
  },
  {
    id: '3',
    title: 'God Of War',
    label: 'god-of-war',
    backgrounds: [
      {
        id: '1',
        src: godOfWarBg1,
        alt: 'Banner 1 - Cena do jogo em que o homem de ferro se prepara para atacar um inimigo'
      },
      {
        id: '2',
        src: godOfWarBg2,
        alt: 'Banner 2 - Imagem do homem de ferro soltando um laiser pela mão'

      },
      {
        id: '3',
        src: godOfWarBg3,
        alt: 'Banner 3 - Cena do jogo em que o homem de ferro esta em um combate area com naves inimigas'
      },
      {
        id: '4',
        src: godOfWarBg4,
        alt: 'Banner 4 - Imagem do homem de ferro voando'
      }
    ],
    coverSrc: '',
    logoSrc: '',
    description: 'Lorem ipsum lorem ipsum, lorem ipsum lorem ipsum lorem ipsum.'
  }
];
