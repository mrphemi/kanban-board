"use client";

import { useRouter } from "next/navigation";

import Modal from "@/components/Dashboard/Modal";
import TaskForm from "@/components/Dashboard/Board/TaskForm";

export default function AddBoard() {
    const router = useRouter();

    return (
        <>
            <Modal onInteractOutside={() => router.back()}>
                <Modal.Title className="heading-lg mb-6 text-kb-black-primary dark:text-white">
                    Edit Task
                </Modal.Title>
                <TaskForm />
            </Modal>
        </>
    );
}
