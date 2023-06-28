"use client";

import { useRouter } from "next/navigation";
import { DialogTitle as ModalTitle } from "@radix-ui/react-dialog";

import Modal from "@/components/Dashboard/Modal";
import BoardForm from "@/components/Dashboard/Board/BoardForm";

export default async function AddBoard() {
  const router = useRouter();

  return (
    <>
      <Modal onInteractOutside={() => router.back()}>
        <ModalTitle className="heading-lg mb-6 text-kb-black-primary dark:text-white">
          Add New Project
        </ModalTitle>
        <BoardForm />
      </Modal>
    </>
  );
}
