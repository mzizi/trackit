import React from "react";

import LineChart from "@/components/charts/LineChart";

const Dashboard = () => {
  return (
    <div className="w-full xl:w-[85%] border xl:h-[85%] p-8 h-full shadow rounded-md bg-background text-foreground relative">
      <div className="w-full h-full grid gap-2 grid-rows-5 grid-cols-[repeat(auto-fit,minmax(min(16rem,_100%),_1fr))]">
        <div className="row-span-1 border rounded-md shadow col-span-full xl:col-span-2 border-border">
          <div className="grid items-center justify-center h-full gap-2 p-4">
            <h1 className="font-sans text-3xl font-extrabold leading-snug">
              Dashboard Title
            </h1>
            <p className="text-sm font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              explicabo, unde vitae cupiditate praesentium sit obcaecati
            </p>
          </div>
        </div>
        <section className="grid grid-cols-2 gap-2 items-between row-span-1 col-[1/-1] xl:col-[3/-1] sm:grid-cols-4">
          <div className="flex items-center justify-center border rounded-md shadow border-border sm:h-full aspect-video sm:aspect-auto">
            <div className="grid items-center justify-center gap-2 p-4 text-primary h-max dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="mx-auto h-9 w-9 aspect-square"
              >
                <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
              </svg>
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <p className="text-xl font-semibold leading-snug">200</p>
                <p className="text-sm capitalize">Orders</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center border rounded-md shadow border-border sm:h-full aspect-video sm:aspect-auto">
            <div className="grid items-center justify-center gap-2 p-4 text-primary h-max dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="mx-auto h-9 w-9 aspect-square"
              >
                <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
              </svg>
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <p className="text-xl font-semibold leading-snug ">7500</p>
                <p className="text-sm capitalize">Customers</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center border rounded-md shadow border-border sm:h-full aspect-video sm:aspect-auto">
            <div className="grid items-center justify-center gap-2 p-4 text-primary h-max dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="mx-auto h-9 w-9 aspect-square"
              >
                <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                <rect width="32" height="32" x="80" y="264"></rect>
                <rect width="32" height="32" x="240" y="128"></rect>
                <rect width="32" height="32" x="136" y="168"></rect>
                <rect width="32" height="32" x="400" y="264"></rect>
                <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
              </svg>
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <p className="text-xl font-semibold leading-snug">172%</p>
                <p className="text-sm capitalize">Growth</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center border rounded-md shadow border-border sm:h-full aspect-video sm:aspect-auto">
            <div className="grid items-center justify-center gap-2 p-4 text-primary h-max dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="mx-auto h-9 w-9 aspect-square"
              >
                <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
              </svg>
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <p className="text-xl font-semibold leading-snug">17%</p>
                <p className="text-sm capitalize">Bounce Rate</p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex-1 row-[3/-1] xl:row-[2/-1] p-4 border rounded-md shadow border-border col-span-full">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
