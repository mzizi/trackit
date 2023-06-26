import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col w-[80%] h-[70%] gap-10 mx-auto">
      <h1 className="font-sans text-2xl font-black text-center underline uppercase underline-offset-4">
        Supply Chain Track and Trace System
      </h1>
      <div className="relative flex-1 w-full mx-auto">
        <Image
          fill
          sizes="700"
          alt="connected world"
          className="object-cover w-full h-auto"
          src="/images/connected-world.svg"
        />
      </div>
      <h3 className="font-serif text-lg font-semibold text-center capitalize">
        Track, Trace & Transform your supply chain with ease.
      </h3>
    </div>
  );
};

export default Banner;
