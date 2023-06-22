"use client";

import { useRouter } from "next/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";

import Dialog from "@/components/Dashboard/Dialog";
import BoardForm from "@/components/Dashboard/Board/BoardForm";

export default async function EditBoard() {
  const router = useRouter();

  return (
    <>
      <Dialog onInteractOutside={() => router.back()}>
        <DialogTitle className="heading-lg mb-6 text-kb-black-primary dark:text-white">
          Edit Project Name
        </DialogTitle>
        <BoardForm />
      </Dialog>
    </>
  );
}
