import { useState } from "react";

import { twMerge } from "tailwind-merge";

import * as Checkbox from "@radix-ui/react-checkbox";

interface SubTaskProps {
  id: string;
  title: string;
  isCompleted?: boolean;
}

const SubTask = ({ id, title, isCompleted }: SubTaskProps) => {
  const [completed, setCompleted] = useState(isCompleted);

  return (
    <div className="bg-kb-grey-light-secondary dark:bg-kb-black-secondary rounded-[4px] flex items-center gap-x-4 p-3">
      <Checkbox.Root
        checked={completed}
        onCheckedChange={() => setCompleted((prevChecked) => !prevChecked)}
        id={id}
        className="rounded-sm w-4 h-4 basis-4 appearance-none flex items-center justify-center bg-white outline-none 
    border border-kb-grey-dark-secondary/25 data-[state=checked]:bg-kb-purple-primary"
      >
        <Checkbox.Indicator className="text-white mt-0.5">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </Checkbox.Indicator>
      </Checkbox.Root>

      <label
        className={twMerge(
          "text-kb-black-primary dark:text-white copy-md basis-full",
          completed ? "text-kb-grey-dark-secondary line-through" : ""
        )}
        htmlFor={id}
      >
        {title}
      </label>
    </div>
  );
};

export default SubTask;
