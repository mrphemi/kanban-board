"use client";

import { useRouter } from "next/navigation";
import { DialogTitle as ModalTitle } from "@radix-ui/react-dialog";

import Modal from "@/components/Dashboard/Modal";
import TaskForm from "@/components/Dashboard/Board/TaskForm";

export default function AddBoard() {
  const router = useRouter();

  return (
    <>
      <Modal onInteractOutside={() => router.back()}>
        <ModalTitle className="heading-lg mb-6 text-kb-black-primary dark:text-white">
          Add New Task
        </ModalTitle>
        <TaskForm />
      </Modal>
    </>
  );
}
