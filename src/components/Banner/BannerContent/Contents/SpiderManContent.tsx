import { IContentParams } from "./interfaces/IContentParams";


const SpiderManContent = ({ imgCover, imgLogo, description }: IContentParams) => {

  console.log({ imgCover, imgLogo, description })

  return (
    <div
      className="relative w-full h-full flex items-center px-[120px] z-10"
    >
      <div className="flex flex-col gap-11">
        {/* Content */}
        <div className="w-[350px] flex flex-col justify-center gap-3">
          {/* Title*/}
          <div className="w-full">
            <img src={imgLogo} alt="Logo do game Spider-Man" />
          </div>

          <p
            className="text-2xl text-primaryWhite"
          >
            {description}
          </p>
        </div>

        {/* Botão */}
        <button className="bg-white ">Temporario</button>
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
