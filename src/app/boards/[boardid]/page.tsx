import ColumnGrid from "@/components/Dashboard/Board/ColumnGrid";
import DeleteDialog from "@/components/Dashboard/DeleteDialog";

export default function Dashboard() {
    return (
        <>
            <div className="my-6 container">
                <ColumnGrid />
                <DeleteDialog />
            </div>
        </>
    );
}
