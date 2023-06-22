"use client";

import { DialogTitle } from "@radix-ui/react-dialog";

import { useDeleteDialogStore } from "@/lib/store";

import Button from "../common/Button/Button";
import Dialog from "./Dialog";

const DeleteDialog = () => {
  const { isOpen, close, target } = useDeleteDialogStore();

  const text =
    target === "board"
      ? "Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed."
      : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae saepe culpa nostrum! Dolorem, quibusdam iure. Hic repudiandae soluta nulla explicabo?";

  return (
    <Dialog isOpen={isOpen} onFocusOutside={(e) => e.preventDefault()}>
      <DialogTitle className="heading-lg mb-6 text-kb-mandy-primary">
        Delete this board?
      </DialogTitle>
      <div>
        <p className="copy-lg text-kb-grey-dark-secondary">{text}</p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
          <Button size="large" intent="danger" className="w-full" type="button">
            Delete
          </Button>
          <Button
            size="large"
            intent="secondary"
            className="w-full"
            type="button"
            onClick={() => close()}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteDialog;
