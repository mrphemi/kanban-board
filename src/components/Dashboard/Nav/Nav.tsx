"use client";

import { useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import * as Popover from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";

import { useSideNavigationStore, useDeleteModalStore } from "@/lib/store";

import Button from "../../common/Button/Button";
import LogoMobile from "../../common/Logos/LogoMobile";
import LogoDark from "../../common/Logos/LogoDark";
import LogoLight from "../../common/Logos/LogoLight";
import MobileMenu from "./MobileMenu";
import SideNav from "./SideNav";
import SideNavTrigger from "./SideNavTrigger";

const Nav = () => {
  const pathname = usePathname();

  const isSideNavOpen = useSideNavigationStore((state) => state.isOpen);

  useEffect(() => {
    const dashboardContent = document.getElementById("dashboard-content");
    if (dashboardContent) {
      dashboardContent.dataset.sideNavOpen = String(isSideNavOpen);
    }
  }, [isSideNavOpen, pathname]);

  return (
    <>
      <div
        className={twMerge(
          "container bg-white dark:bg-kb-black-tertiary flex items-center gap-x-5 md:border-b dark:border-kb-grey-dark-primary duration-200",
          isSideNavOpen ? "md:ml-[261px] md:w-[calc(100%-261px)]" : ""
        )}
      >
        {/* Logo */}
        <Link
          href="/dashboard"
          className={twMerge(
            "pt-5 pb-[19px] md:pr-5 md:border-r dark:border-kb-grey-dark-primary",
            isSideNavOpen ? "hidden" : ""
          )}
        >
          <LogoMobile className="md:hidden" />
          <LogoDark className="hidden dark:md:block text-white" />
          <LogoLight className="hidden md:block dark:md:hidden text-kb-black-primary" />
        </Link>

        <MobileMenu />

        {/* Project name */}
        <h1 className="heading-lg text-kb-black-primary dark:text-white hidden md:block mt-1">
          Platform Launch
        </h1>

        {/* Add task, edit and delete board ctas */}
        <div className="flex items-center gap-x-4 ml-auto pt-5 pb-[19px]">
          <Link href={`${pathname}/new-task`}>
            <Button size="small">
              <svg
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                className="md:hidden"
              >
                <path
                  fill="#FFF"
                  d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
                />
              </svg>
              <span className="hidden md:block heading-md">+ Add New Task</span>
            </Button>
          </Link>
          <BoardActions />
        </div>
      </div>

      <SideNav />
      <SideNavTrigger />
    </>
  );
};

export default Nav;

// Edit and delete board popover
const BoardActions = () => {
  const { open } = useDeleteModalStore();

  const pathname = usePathname();

  return (
    <Popover.Root>
      <Popover.Trigger asChild className="cursor-pointer">
        <svg width="5" height="20" xmlns="http://www.w3.org/2000/svg">
          <g fill="#828FA3" fillRule="evenodd">
            <circle cx="2.308" cy="2.308" r="2.308" />
            <circle cx="2.308" cy="10" r="2.308" />
            <circle cx="2.308" cy="17.692" r="2.308" />
          </g>
        </svg>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="space-y-4 bg-white dark:bg-kb-black-secondary p-4 outline-none rounded-lg mr-4 animate-in fade-in duration-300"
          sideOffset={20}
        >
          <Popover.Close
            asChild
            className="PopoverClose cursor-pointer"
            aria-label="Close"
          >
            <Link
              href={`${pathname}/edit`}
              className="text-kb-grey-dark-secondary copy-lg"
            >
              Edit Board
            </Link>
          </Popover.Close>
          <Popover.Close
            asChild
            className="PopoverClose cursor-pointer"
            aria-label="Close"
            onClick={() => {
              open("board");
            }}
          >
            <p className=" text-kb-mandy-primary copy-lg">Delete Board</p>
          </Popover.Close>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
