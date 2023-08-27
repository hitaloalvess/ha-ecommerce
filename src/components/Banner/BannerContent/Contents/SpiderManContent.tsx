import BannerButton from "../../BannerButton";
import { IContentParams } from "./interfaces/IContentParams";


const SpiderManContent = ({ imgCover, imgLogo, description }: IContentParams) => {

  console.log({ imgCover, imgLogo, description })

  return (
    <div
      className="relative w-full h-full flex items-center px-[120px] z-10"
    >
      <div className="flex flex-col justify-center gap-11">

        <div className="w-[350px] flex flex-col justify-center gap-3">

          <div className="w-full">
            <img src={imgLogo} alt="Logo do game Spider-Man" />
          </div>

          <p className="text-lg text-primaryWhite">
            {description}
          </p>
        </div>

        <BannerButton
          title="comprar"
          secondaryTitle="+ informações"
          clickMainBtn={() => console.log('Comprar Spider-man')}
          clickSecondaryBtn={() => console.log('+ Informações Spider-man')}
        />
      </div>

      <div
        className="absolute bottom-6 right-0 w-fit h-fit"
      >
        <img
          src={imgCover}
          alt="Imagem do Homem aranha com seu traje preto"
          className="w-full h-full"
        />
      </div>

    </div>
  );
};

export default SpiderManContent;
