"use client";

import { DialogTitle as ModalTitle } from "@radix-ui/react-dialog";

import { useDeleteModalStore } from "@/lib/store";

import Button from "../common/Button/Button";
import Modal from "./Modal";

const DeleteModal = () => {
  const { isOpen, close, target } = useDeleteModalStore();

  const text =
    target === "board"
      ? "Are you sure you want to delete the ‘{board name}’ board? This action will remove all columns and tasks and cannot be reversed."
      : "Are you sure you want to delete the ‘{task name}’ task and its subtasks? This action cannot be reversed.";

  return (
    <Modal isOpen={isOpen} onFocusOutside={(e) => e.preventDefault()}>
      <ModalTitle className="heading-lg mb-6 text-kb-mandy-primary">
        Delete this {target}?
      </ModalTitle>
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
    </Modal>
  );
};

export default DeleteModal;
