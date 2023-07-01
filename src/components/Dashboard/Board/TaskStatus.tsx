import React from "react";

import * as Select from "@radix-ui/react-select";

interface TaskStatusProps {
  statusList: string[];
}

const TaskStatus = ({ statusList }: TaskStatusProps) => {
  return (
    <Select.Root>
      <Select.Trigger
        className="w-full flex items-center justify-between border border-kb-grey-dark-secondary/25 rounded-[4px] px-4 py-2 
  text-kb-black-primary dark:text-white copy-lg capitalize"
        aria-label="Status"
      >
        <Select.Value placeholder="Todo" />
        <Select.Icon>
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.798431 1.54883L5.49691 6.24731L10.1954 1.54883"
              stroke="#635FC7"
              stroke-width="2"
            />
          </svg>
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="overflow-hidden bg-white dark:bg-kb-black-secondary text-kb-grey-dark-secondary copy-lg rounded-md relative z-50 w-full min-w-[8rem] data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
          position="popper"
        >
          <Select.Viewport className="p-4 h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]">
            <Select.Group className="space-y-2 capitalize">
              {statusList.map((status) => (
                <Select.Item className="cursor-pointer" value={status}>
                  <Select.ItemText>{status}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default TaskStatus;
