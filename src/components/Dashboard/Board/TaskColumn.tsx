"use client";

import { useRouter, useParams, usePathname } from "next/navigation";

import Link from "next/link";
import Task from "./Task";

const tasks = Array(10).fill(0);

const TaskColumn = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className="overflow-y-scroll flex flex-col space-y-6 min-w-[280px] max-w-[280px]">
      <h2 className="heading-sm uppercase text-kb-grey-dark-secondary flex items-center">
        <span className="w-4 h-4 bg-kb-purple-secondary mr-3 rounded-full"></span>
        Todo ({4})
      </h2>
      <div className="overflow-y-scroll flex flex-col space-y-5">
        {tasks.map((_, i) => (
          <Link key={i} href={`${path}/${i + 1}`}>
            <Task />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
