import ColumnGrid from "@/components/Dashboard/Board/ColumnGrid";
import DeleteDialog from "@/components/Dashboard/DeleteDialog";

export default function Dashboard() {
  return (
    <>
      <main id="dashboard-content" className="duration-200">
        <div className="my-6 container">
          <ColumnGrid />
          <DeleteDialog />
        </div>
      </main>
    </>
  );
}
