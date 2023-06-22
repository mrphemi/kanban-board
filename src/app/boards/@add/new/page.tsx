"use client";

import { useRouter } from "next/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";

import Dialog from "@/components/Dashboard/Dialog";
import BoardForm from "@/components/Dashboard/Board/BoardForm";

export default async function AddBoard() {
  const router = useRouter();

  return (
    <>
      <Dialog onInteractOutside={() => router.back()}>
        <DialogTitle className="heading-lg mb-6 text-kb-black-primary dark:text-white">
          Add New Project
        </DialogTitle>
        <BoardForm />
      </Dialog>
    </>
  );
}
