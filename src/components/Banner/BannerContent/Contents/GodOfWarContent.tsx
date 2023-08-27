import BannerButton from "../../BannerButton";
import { IContentParams } from "./interfaces/IContentParams";

const GodOfWarContent = ({ imgCover, imgLogo, description }: IContentParams) => {
  return (
    <div
      className="relative w-full h-full flex items-center px-[120px] z-10"
    >
      <div className="flex flex-col justify-center gap-11">

        <div className="w-[350px] flex flex-col justify-center gap-3">

          <div className="w-full">
            <img src={imgLogo} alt="Logo do game God-Of-War" />
          </div>

          <p className="text-lg text-primaryWhite">
            {description}
          </p>
        </div>

        <BannerButton
          title="comprar"
          secondaryTitle="+ informações"
          clickMainBtn={() => console.log('Comprar God-of-War')}
          clickSecondaryBtn={() => console.log('+ Informações God-Of-War')}
        />
      </div>

      <div
        className="absolute -bottom-10 right-0 w-fit h-fit"
      >
        <img
          src={imgCover}
          alt="Imagem do personagem Kratos"
          className="w-full h-full"
        />
      </div>

    </div>
  );
};

export default GodOfWarContent;
