import BannerButton from "../../BannerButton";
import { IContentParams } from "./interfaces/IContentParams";

const IronManContent = ({ imgCover, imgLogo, description }: IContentParams) => {
  return (
    <div
      className="relative w-full h-full flex items-center px-[120px] z-10"
    >
      <div className="flex flex-col justify-center gap-11">

        <div className="w-[360px] flex flex-col justify-center items-center gap-3">

          <div className="w-full">
            <img src={imgLogo} alt="Logo do game Iron-man" />
          </div>

          <p className="text-lg text-primaryWhite">
            {description}
          </p>
        </div>

        <BannerButton
          title="comprar"
          secondaryTitle="+ informações"
          clickMainBtn={() => console.log('Comprar Iron-man')}
          clickSecondaryBtn={() => console.log('+ Informações Iron-man')}
        />
      </div>

      <div
        className=" max-w-[600px] absolute bottom-6 right-[120px] w-fit h-fit"
      >
        <img
          src={imgCover}
          alt="Imagem do Homem de ferro preparando para soltar um laser de sua mão"
          className="w-full h-full"
        />
      </div>

    </div>
  );
};

export default IronManContent;
