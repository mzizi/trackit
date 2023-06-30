import Link from "next/link";
import { GaugeIcon } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { buttonVariants } from "@/components/ui/button";

const NavbarAuth = () => {
  return (
    <div className="flex items-center gap-4">
      <SignedIn>
        <div className="flex items-center justify-center gap-8 w-max">
          <Link
            title="Dashboard"
            href="/dashboard/"
            className={buttonVariants({
              variant: "outline",
              size: "icon",
              className: "!rounded-full !bg-transparent shadow",
            })}
          >
            <GaugeIcon />
          </Link>
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex items-center justify-center gap-8 w-max">
          <Link
            href="/sign-up"
            className={buttonVariants({
              variant: "outline",
              className: "text-sm w-full",
            })}
          >
            Register
          </Link>
          <Link
            href="/sign-in"
            className={buttonVariants({ className: "text-sm w-full" })}
          >
            Login
          </Link>
        </div>
      </SignedOut>
    </div>
  );
};

export default NavbarAuth;
