import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col w-[90%] aspect-square gap-10 mx-auto">
      <h1 className="font-sans text-2xl font-black leading-loose text-center">
        Supply Chain Track and Trace System
      </h1>
      <div className="relative flex-1 w-full mx-auto aspect-video">
        <Image
          fill
          sizes="700"
          alt="connected world"
          className="object-cover"
          src="/images/connected-world.svg"
        />
      </div>
      <h3 className="font-sans text-lg font-medium text-center">
        Track, Trace & Transform your supply chain with ease.
      </h3>
    </div>
  );
};

export default Banner;
