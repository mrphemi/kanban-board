import Link from "next/link";
import { usePathname } from "next/navigation";

import * as Popover from "@radix-ui/react-popover";

import { useDeleteModalStore } from "@/lib/store";

const TaskActions = () => {
  const pathname = usePathname();

  const { open } = useDeleteModalStore();

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
          className="space-y-4 bg-white dark:bg-kb-black-secondary p-4 outline-none rounded-lg mr-4 animate-in fade-in duration-300 z-50"
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
              Edit Task
            </Link>
          </Popover.Close>
          <Popover.Close
            asChild
            className="PopoverClose cursor-pointer"
            aria-label="Close"
            onClick={() => {
              open("task");
            }}
          >
            <p className=" text-kb-mandy-primary copy-lg">Delete Task</p>
          </Popover.Close>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default TaskActions;
