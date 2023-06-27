import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

const Banner = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-accent">
      <div className="container flex items-center justify-center gap-10 py-4 mx-auto font-sans">
        <small>Copyright &copy; {new Date().getFullYear()}</small>
        <div className="flex items-center gap-1 text-sm text-primary/75">
          <span>Made with</span>
          <span className="text-lg text-red-400 dark:text-red-300">
            &hearts;
          </span>
          <span>by</span>
          <Link
            href="https://github.com/rodgersgitau"
            className={buttonVariants({
              variant: "link",
              className: "!p-0 !text-left font-semibold",
            })}
          >
            Rodgers M Gitau
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Banner;
