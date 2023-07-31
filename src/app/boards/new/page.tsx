import BoardForm from "@/components/Dashboard/Board/BoardForm";

export default function AddBoard() {
    return (
        <>
            <div className="mt-10 md:mt-20 max-w-lg mx-auto">
                <h1 className="heading-lg mb-6 text-kb-black-primary dark:text-white">
                    Add New Project
                </h1>
                <BoardForm />
            </div>
        </>
    );
}
