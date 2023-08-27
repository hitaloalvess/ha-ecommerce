import { useMemo } from "react";

import { IContentParams } from "./Contents/interfaces/IContentParams";
import SpiderManContent from "./Contents/SpiderManContent";
import IronManContent from "./Contents/IronManContent";
import GodOfWarContent from "./Contents/GodOfWarContent";

interface IContent {
  [key: string]: (props: IContentParams) => JSX.Element;
}

interface IBannerContent {
  nameContent: string;
  imgCover: string;
  imgLogo: string;
  description: string;
}

const BannerContent = ({ nameContent, imgCover, imgLogo, description }: IBannerContent) => {

  const CurrentContent = useMemo(() => {
    const contents: IContent = {
      'spider-man': SpiderManContent,
      'iron-man': IronManContent,
      'god-of-war': GodOfWarContent
    }

    return contents[nameContent];

  }, [nameContent]);

  if (!CurrentContent) return null;

  return (
    <CurrentContent
      imgCover={imgCover}
      imgLogo={imgLogo}
      description={description}
    />
  )
};

export default BannerContent;
