"use client";

import * as Popover from "@radix-ui/react-popover";
import * as Dialog from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

import Button from "../common/Button/Button";

const Nav = () => {
  return (
    <div className="container pt-5 pb-[19px] bg-white dark:bg-kb-black-tertiary flex items-center gap-x-5">
      {/* Logo */}
      <svg width="24" height="25" xmlns="http://www.w3.org/2000/svg">
        <g fill="#635FC7" fill-rule="evenodd">
          <rect width="6" height="25" rx="2" />
          <rect opacity=".75" x="9" width="6" height="25" rx="2" />
          <rect opacity=".5" x="18" width="6" height="25" rx="2" />
        </g>
      </svg>

      <MobileMenu />

      {/* Project name */}
      <h1 className="heading-lg text-kb-black-primary dark:text-white hidden md:block">
        Platform Launch
      </h1>

      {/* Add task, edit and delete project ctas */}
      <div className="flex items-center gap-x-4 ml-auto">
        <Button size="small">
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFF"
              d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
            />
          </svg>
        </Button>

        <Popover.Root>
          <Popover.Trigger asChild className="cursor-pointer">
            <svg width="5" height="20" xmlns="http://www.w3.org/2000/svg">
              <g fill="#828FA3" fill-rule="evenodd">
                <circle cx="2.308" cy="2.308" r="2.308" />
                <circle cx="2.308" cy="10" r="2.308" />
                <circle cx="2.308" cy="17.692" r="2.308" />
              </g>
            </svg>
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content
              className="PopoverContent space-y-4 bg-white dark:bg-kb-black-secondary p-4 outline-none rounded-lg mr-4 animate-in fade-in duration-300"
              sideOffset={20}
            >
              <Popover.Close
                asChild
                className="PopoverClose cursor-pointer"
                aria-label="Close"
              >
                <p className="text-kb-grey-dark-secondary copy-lg">
                  Edit Board
                </p>
              </Popover.Close>
              <Popover.Close
                asChild
                className="PopoverClose cursor-pointer"
                aria-label="Close"
              >
                <p className=" text-kb-mandy-primary copy-lg">Delete Board</p>
              </Popover.Close>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
};

export default Nav;

type ProjectLinkProps = React.ComponentPropsWithoutRef<"div">;

const ProjectLink = ({ className, children }: ProjectLinkProps) => {
  return (
    <div
      className={twMerge(
        "pl-6 pr-10 py-4 rounded-r-full inline-block text-kb-grey-dark-secondary hover:text-white hover:bg-kb-purple-primary",
        className
      )}
    >
      <div className="flex items-center space-x-3">
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
            className="fill-current"
          />
        </svg>
        <div className="heading-md">{children}</div>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Dialog.Root>
        <Dialog.Trigger asChild className="cursor-pointer">
          <div className="flex items-center gap-x-2">
            <p className="heading-lg text-kb-black-primary dark:text-white">
              Platform Launch
            </p>
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="#635FC7"
                stroke-width="2"
                fill="none"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay bg-black/50 fixed inset-0 transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:animate-in data-[state=open]:fade-in" />
          <Dialog.Content className="DialogContent bg-white dark:bg-kb-black-tertiary py-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-xs max-h-[400px] overflow-scroll animate-in fade-in duration-300 origin-center rounded-lg">
            <Dialog.Title className="heading-sm text-kb-grey-dark-secondary px-6">
              ALL BOARDS (3)
            </Dialog.Title>

            <div className="mt-5">
              <Dialog.Close>
                <ProjectLink>Platform Launch</ProjectLink>
              </Dialog.Close>

              <Dialog.Close>
                <ProjectLink>Marketing Plan</ProjectLink>
              </Dialog.Close>

              <Dialog.Close>
                <ProjectLink>Roadmap</ProjectLink>
              </Dialog.Close>

              <Dialog.Close>
                <ProjectLink className="bg-none text-kb-purple-primary">
                  + Create New Project
                </ProjectLink>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
