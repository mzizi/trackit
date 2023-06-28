import { Dispatch, FC, SetStateAction } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";

interface Props {
  collapseSidebar: Dispatch<SetStateAction<boolean>>;
}

const Topbar: FC<Props> = ({ collapseSidebar }) => {
  return (
    <nav className="sticky top-0 left-0 right-0 h-16 border-b border-border">
      <div className="flex items-center w-full gap-4 p-2">
        <div className="flex items-center justify-start flex-1 gap-4">
          <Button
            variant="outline"
            onClick={() => collapseSidebar((prev) => !prev)}
            className="p-0 text-gray-600 rounded cursor-pointer aspect-square "
          >
            <Icons.menu />
          </Button>
          <div className="hidden w-1/2 md:block">
            <form action="#">
              <label className="sr-only">Search</label>
              <div className="relative mt-1 lg:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Icons.search />
                </div>
                <input
                  type="text"
                  name="name"
                  className="border sm:text-sm rounded-lg focus:outline-none focus:ring-1 block w-full pl-10 p-2.5"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center gap-4 ml-auto ">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <span className="w-8 aspect-square">
                  <Icons.bell className="w-full aspect-square" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="w-8 rounded-none aspect-square">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
