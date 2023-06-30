"use client";

import {
  AlertCircleIcon,
  AlertTriangleIcon,
  BellIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { Dispatch, FC, SetStateAction } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StoreSwitcher from "./StoreSwitcher";
import { UserButton } from "@clerk/nextjs";

interface Props {
  collapseSidebar: Dispatch<SetStateAction<boolean>>;
}

const Topbar: FC<Props> = ({ collapseSidebar }) => {
  return (
    <nav className="sticky top-0 left-0 right-0 h-16 border-b border-border">
      <div className="flex items-center w-full gap-4 px-8 py-2">
        <div className="flex items-center justify-start flex-1 gap-4">
          <Button
            variant="outline"
            onClick={() => collapseSidebar((prev) => !prev)}
            className="p-0 text-gray-600 rounded cursor-pointer aspect-square "
          >
            <MenuIcon />
          </Button>
          <div className="hidden w-1/2 md:block">
            <StoreSwitcher items={[]} />
          </div>
          <div className="flex items-center justify-center gap-8 ml-auto ">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none focus:border-0">
                <span className="w-16 aspect-square">
                  <BellIcon className="w-full aspect-square" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col w-full max-w-sm gap-2 p-4 rounded-md">
                <div className="flex flex-row items-center gap-2 p-2 border rounded-lg shadow hover:bg-indigo-100 border-border">
                  <span>
                    <AlertCircleIcon />
                  </span>
                  <span className="flex-1 p-2 text-xs">
                    Ad obcaecati eaque eum aut, similique perferendis,
                    reprehenderit odit nulla aliquam ex nostrum repellat
                  </span>
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <XIcon />
                  </Button>
                </div>
                <div className="flex flex-row items-center gap-2 p-2 border rounded-lg shadow hover:bg-indigo-100 border-border">
                  <span>
                    <AlertTriangleIcon />
                  </span>
                  <span className="flex-1 p-2 text-xs">
                    Ad obcaecati eaque eum aut, similique perferendis,
                    reprehenderit odit nulla aliquam ex nostrum repellat
                  </span>
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <XIcon />
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
