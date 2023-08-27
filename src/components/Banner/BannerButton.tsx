
interface IBannerButton {
  title: string;
  secondaryTitle: string;
  clickMainBtn: () => void;
  clickSecondaryBtn?: () => void;
}

const BannerButton = ({ title, secondaryTitle, clickMainBtn, clickSecondaryBtn }: IBannerButton) => {
  return (
    <div
      className="relative max-w-[320px] flex items-center gap-x-4 cursor-pointer
       after:absolute after:right-0 after:w-3/4 after:h-[58px] after:bg-customBigStone60% after:skew-x-[-12deg] after:z-0 after:hover:scale-110 after:transition-all after:duration-300"
    >
      <button
        className="relative px-8 py-3
        after:absolute after:top-0 after:left-0 after:w-full after:h-full after:skew-x-[-12deg] after:bg-primaryRed after:z-[1] after:hover:scale-110 after:transition-all after:duration-300"
        onClick={clickMainBtn}
      >
        <p className="relative uppercase text-primaryWhite z-[2]">{title}</p>
      </button>
      <button onClick={clickSecondaryBtn}>
        <p className="relative uppercase px-4 py-4 text-primaryWhite z-[1]">{secondaryTitle}</p>
      </button>
    </div>
  );
};

export default BannerButton;
