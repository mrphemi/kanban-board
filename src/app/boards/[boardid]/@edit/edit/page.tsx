"use client";

import { useRouter } from "next/navigation";

import Modal from "@/components/Dashboard/Modal";
import BoardForm from "@/components/Dashboard/Board/BoardForm";

export default function EditBoard() {
    const router = useRouter();

    return (
        <>
            <Modal onInteractOutside={() => router.back()}>
                <Modal.Title className="heading-lg mb-6 text-kb-black-primary dark:text-white">
                    Edit Project Name
                </Modal.Title>
                <BoardForm />
            </Modal>
        </>
    );
}
