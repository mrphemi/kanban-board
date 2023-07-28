"use client";

import { useRouter } from "next/navigation";

import Modal from "@/components/Dashboard/Modal";
import BoardForm from "@/components/Dashboard/Board/BoardForm";

export default function AddBoard() {
    const router = useRouter();

    return (
        <>
            <Modal onInteractOutside={() => router.back()}>
                <Modal.Title className="heading-lg mb-6 text-kb-black-primary dark:text-white">
                    Add New Project
                </Modal.Title>
                <BoardForm />
            </Modal>
        </>
    );
}
