"use client";

import { useRouter } from "next/navigation";

import { DialogTitle as ModalTitle } from "@radix-ui/react-dialog";

import Modal from "@/components/Dashboard/Modal";
import SubTask from "@/components/Dashboard/Board/SubTask";
import TaskStatus from "@/components/Dashboard/Board/TaskStatus";
import TaskActions from "@/components/Dashboard/Board/TaskActions";

const subtasks = [
  {
    id: "1",
    title: "Research competitor pricing and business models.",
    isCompleted: false,
  },
  {
    id: "2",
    title: "Outline a business model that works for our solution.",
    isCompleted: false,
  },
  {
    id: "3",
    title:
      "Talk to potential customers about our proposed solution and ask for fair price expectancy.",
    isCompleted: false,
  },
];

const statusList = ["todo", "doing", "done"];

export default function TaskModal() {
  const router = useRouter();

  return (
    <>
      <Modal onInteractOutside={() => router.back()}>
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <ModalTitle className="heading-lg text-kb-black-primary dark:text-white w-4/5 max-w-sm">
              Research pricing points of various competitors and trial different
              business models
            </ModalTitle>

            <TaskActions />
          </div>

          <p className="copy-lg text-kb-grey-dark-secondary">
            We know what we're planning to build for version one. Now we need to
            finalise the first pricing model we'll use. Keep iterating the
            subtasks until we have a coherent proposition.
          </p>

          <div>
            <h3 className="heading-sm text-kb-grey-dark-secondary mb-2">
              Subtasks (2 of 3)
            </h3>
            <div className="space-y-2">
              {subtasks.map((subtask) => (
                <SubTask
                  key={subtask.id}
                  id={subtask.id}
                  title={subtask.title}
                  isCompleted={subtask.isCompleted}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="heading-sm text-kb-grey-dark-secondary mb-2">
              Current Status
            </h3>
            <TaskStatus statusList={statusList} />
          </div>
        </div>
      </Modal>
    </>
  );
}
