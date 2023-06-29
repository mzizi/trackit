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
import { BellIcon, MenuIcon, SearchIcon } from "lucide-react";

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
            <form action="#">
              <label className="sr-only">Search</label>
              <div className="relative mt-1 lg:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <SearchIcon />
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
              <DropdownMenuTrigger className="focus:outline-none focus:border-0">
                <span className="w-16 aspect-square">
                  <BellIcon className="w-full aspect-square" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col w-full max-w-sm gap-2 p-4 rounded-md">
                <div className="flex flex-row items-center gap-2 p-2 overflow-hidden border rounded-lg shadow dark:bg-gray-900 dark:border-violet-400">
                  <span className="inline-flex justify-center flex-shrink-0 mx-3 rounded-full item-center leadi dark:bg-violet-400 dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex-1 p-2">
                    <p className="text-xs dark:text-gray-100">
                      Ad obcaecati eaque eum aut, similique perferendis,
                      reprehenderit odit nulla aliquam ex nostrum repellat
                    </p>
                  </div>
                  <button type="button" className="p-2 ml-6 dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="flex flex-row items-center gap-2 p-2 overflow-hidden border rounded-lg shadow dark:bg-gray-900 dark:border-violet-400">
                  <span className="inline-flex justify-center flex-shrink-0 mx-3 rounded-full item-center leadi dark:bg-violet-400 dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex-1 p-2">
                    <p className="text-xs dark:text-gray-100">
                      Ad obcaecati eaque eum aut, similique perferendis,
                      reprehenderit odit nulla aliquam ex nostrum repellat
                    </p>
                  </div>
                  <button type="button" className="p-2 ml-6 dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="w-8 h-8 rounded">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-w-sm p-4 rounded-md w-36">
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
