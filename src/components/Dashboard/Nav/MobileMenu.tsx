import { useState, useEffect } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { useWindowSize } from "usehooks-ts";

import { useBoardDialogStore } from "@/lib/store";

import ProjectLink from "./ProfileLink";
import ThemeSwitch from "./ThemeSwitch";

const MobileMenu = () => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    if (width >= 768) {
      close();
    }
  }, [width]);

  return (
    <div className="md:hidden">
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild className="menu-trigger cursor-pointer">
          <div className="flex items-center gap-x-2">
            <p className="heading-lg text-kb-black-primary dark:text-white">
              Platform Launch
            </p>
            <svg
              width="10"
              height="7"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow"
            >
              <path
                stroke="#635FC7"
                strokeWidth="2"
                fill="none"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay bg-black/50 fixed inset-0 transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:animate-in data-[state=open]:fade-in" />
          <Dialog.Content className="DialogContent bg-white dark:bg-kb-black-tertiary py-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-xs max-h-[400px] overflow-scroll rounded-lg">
            <Dialog.Title className="heading-sm text-kb-grey-dark-secondary px-6">
              ALL BOARDS (3)
            </Dialog.Title>

            <div className="mt-5 mr-6">
              <Dialog.Close>
                <ProjectLink label="Platform Launch" link="/boards/1" />
              </Dialog.Close>
              <Dialog.Close>
                <ProjectLink label="Marketing Plan" link="/boards/2" />
              </Dialog.Close>
              <Dialog.Close>
                <ProjectLink label=" Road Map" link="/boards/3" />
              </Dialog.Close>
              <Dialog.Close>
                <ProjectLink label=" Web Development" link="/boards/4" />
              </Dialog.Close>
              <Dialog.Close>
                <ProjectLink
                  label="Search Engine Optimization"
                  link="/boards/5"
                />
              </Dialog.Close>
              <Dialog.Close>
                <ProjectLink
                  label=" + Create New Board"
                  link="/boards/new"
                  className="bg-none text-kb-purple-primary"
                />
              </Dialog.Close>
            </div>
            <ThemeSwitch className="mt-4" />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default MobileMenu;
