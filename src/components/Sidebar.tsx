import { FC, useMemo } from "react";

import { Icons } from "@/components/ui/icons";
import Image from "next/image";

interface Props {
  user?: {
    name: string;
    avatar?: string;
  };
  collapsed: boolean;
}

const Sidebar: FC<Props> = ({ collapsed }) => {
  return (
    <div className="grid grid-flow-row grid-rows-[7vh,_1fr] w-full h-full gap-8">
      <div className="flex p-4 w-full h-[4rem] items-center gap-1 bg-black text-white">
        <span
          className={`relative ${
            collapsed ? "w-full" : "w-1/4"
          } aspect-square text-current`}
        >
          <Image
            fill
            priority
            sizes="90"
            className="object-contain fill-white"
            src="/images/logo-icon.svg"
            alt="track it logo"
          />
        </span>
        {!collapsed && (
          <span className="relative w-1/3 text-current aspect-video">
            <Image
              fill
              priority
              sizes="180"
              className="object-contain text-current"
              src="/images/logo-isolated.svg"
              alt="track it logo"
            />
          </span>
        )}
      </div>
      <div className="flex-1 p-4">
        <ul className="space-y-4">
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
