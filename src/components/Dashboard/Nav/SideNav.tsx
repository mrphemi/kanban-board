import { useEffect } from "react";

import Link from "next/link";

import { twMerge } from "tailwind-merge";
import { useWindowSize } from "usehooks-ts";

import { useSideNavigationStore } from "@/lib/store";

import ThemeSwitch from "./ThemeSwitch";
import LogoDark from "@/components/common/Logos/LogoDark";
import LogoLight from "@/components/common/Logos/LogoLight";
import ProjectLink from "./ProfileLink";

const SideNav = () => {
  const { width } = useWindowSize();

  const { close, isOpen } = useSideNavigationStore();

  useEffect(() => {
    if (width < 768) {
      close();
    }
  }, [width, close]);

  return (
    <div
      id="side-nav"
      className={twMerge(
        "fixed z-10 top-0 bottom-0 -left-[261px] w-[261px] h-screen md:border-r dark:border-kb-grey-dark-primary duration-200 bg-white dark:bg-kb-black-tertiary overflow-x-hidden pt-6 pb-12 hidden md:flex flex-col",
        isOpen ? "left-0" : ""
      )}
    >
      {/* Logo */}
      <Link href="/dashboard" className="pl-6">
        <LogoDark className="hidden dark:md:block text-white" />
        <LogoLight className="hidden md:block dark:md:hidden text-kb-black-primary" />
      </Link>

      <div className="mt-14 space-y-5">
        <h2 className="heading-sm text-kb-grey-dark-secondary px-6">
          ALL BOARDS (3)
        </h2>
        <div className="mr-5">
          <ProjectLink label="Platform Launch" link="/boards/1" />
          <ProjectLink label="Marketing Plan" link="/boards/2" />
          <ProjectLink label=" Road Map" link="/boards/3" />
          <ProjectLink label=" Web Development" link="/boards/4" />
          <ProjectLink label="Search Engine Optimization" link="/boards/5" />
          <ProjectLink
            className="bg-transparent text-kb-purple-primary"
            link="/boards/new"
            label=" + Create New Board"
          />
        </div>
      </div>

      <div className="mt-auto">
        <ThemeSwitch className="mt-4" />
        <button
          className="flex items-center gap-x-2 pl-3 py-4 mt-0 mr-10 text-kb-grey-dark-secondary hover:text-kb-purple-primary hover:bg-kb-purple-primary/10 dark:hover:bg-white w-[95%] rounded-r-full"
          onClick={close}
        >
          <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z"
              className="fill-current"
            />
          </svg>
          <span className="heading-md">Hide Sidebar</span>
        </button>
      </div>
    </div>
  );
};

export default SideNav;
