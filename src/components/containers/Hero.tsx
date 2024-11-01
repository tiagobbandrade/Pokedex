import RightArrowIcon from "../../assets/icons/Right Arrow.svg";
import CheveownDownIcon from "../../assets/icons/Chevrown Down.svg";

export function Hero() {
  return (
    <section className="relative z-50 flex flex-col items-center w-full gap-6 mt-32 px-72">
      <div className="rounded-[32px] w-fit flex p-px bg-outer-135deg-border">
        <span className="px-6 py-2.5 text-base text-white font-medium bg-[#191B20] rounded-[32px] leading-tight">
          <span className="text-[#33CC99]">1000+ </span>
          Pokémons
        </span>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-[64px] text-white leading-none">
            Descubra o Mundo{" "}
            <span className="text-[#33CC99] shadow-lg glow-text font-semibold">
              Pokémon:
            </span>
          </h1>
          <h2 className="text-[56px] text-white leading-normal text-center">
            Construa sua Pokédex Completa!
          </h2>
        </div>
        <p className="text-xl text-[#1F6E72] max-w-[704px] text-center leading-6 -mt-2">
          Explore a vasta coleção de Pokémon, descubra seus tipos, habilidades e
          evoluções, e construa sua própria jornada no universo Pokémon.
        </p>
      </div>
      <a
        href="#pokemon-list"
        className="mt-[18px] rounded-[38px] text-base text-[#121316] px-6 py-2 bg-[#33CC99] font-medium flex items-center gap-1.5 hover:scale-105 transition-all duration-500 hover:shadow-md hover:shadow-[#33CC9999]"
      >
        Ver todos
        <img src={RightArrowIcon} alt="Right Arrow Icon" />
      </a>
      <div className="mt-[calc(64px-24px)] flex flex-col items-center gap-1.5 justify-center">
        <img
          src={CheveownDownIcon}
          alt="ChevrownDownIcon"
          className="animate-bounce w-[26px] h-[13px]"
        />
        <img
          src={CheveownDownIcon}
          alt="ChevrownDownIcon"
          className="animate-bounce w-[26px] h-[13px]"
        />
        <img
          src={CheveownDownIcon}
          alt="ChevrownDownIcon"
          className="animate-bounce w-[26px] h-[13px]"
        />
      </div>
    </section>
  );
}
