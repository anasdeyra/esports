import BorderedContainer from "@/components/BorderedContainer";
import ProgressBar from "@/components/ProgressBar";

export default function Supply() {
  return (
    <div>
      <h2 className="font-bold text-6xl pt-16 text-center">Token Supply</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="125"
        height="4"
        viewBox="0 0 125 4"
        fill="none"
        className="mx-auto mt-4"
      >
        <path d="M125 0H0V1.5H29L39 3.5H87.5L96.5 1.5H125V0Z" fill="#2F2DB4" />
      </svg>

      <BorderedContainer className="mt-24 pt-10 pb-16 mx-auto px-16 md:px-56">
        <h2 className="text-3xl text-center">Token supplied already</h2>
        <span className="text-xl text-center block font-light mt-4">
          103,948,227 / 1,000,000,000
        </span>

        <div className="mt-10 shadow-[0px_0px_21px_0px_#004EE7]  rounded-[15px] grid w-full">
          <ProgressBar maxValue={1_000_000_000} value={103_948_227} />
        </div>

        <button className="hover:-translate-y-1 mt-12 mx-auto block active:translate-y-0 active:brightness-[0.85] hero-btn px-10 py-5 text-xl font-bold">
          JOIN NOW
        </button>
      </BorderedContainer>

      <div className="mt-32 px-10 py-16 bg-slate-950 mx-auto">
        <div className="grid grid-cols-3 justify-between divide-x-2 divide-dotted">
          <div className="text-center">
            <h3 className="font-bold text-4xl mb-1">Payement</h3>
            <span className="text-xl font-light">
              Merchandise,NFT, IN-Game purchase,Marketplace
            </span>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-4xl mb-1">DeFi</h3>
            <span className="text-xl font-light">Staking & Reward</span>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-4xl mb-1">Governance</h3>
            <span className="text-xl font-light">
              Participate in Developing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
