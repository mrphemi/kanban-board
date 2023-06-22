import Column from "./TaskColumn";

import Button from "../../common/Button/Button";

const ColumnGrid = () => {
  return (
    <>
      <div className="overflow-scroll flex gap-x-6 min-h-[calc(100vh-119px)] max-h-[calc(100vh-119px)]">
        <Column />
        <Column />
        <Column />
        <Column />
      </div>

      {/* <NoColumn /> */}
    </>
  );
};

export default ColumnGrid;

const NoColumn = () => {
  return (
    <div className="space-y-6 text-center mt-56 md:mt-96 max-w-[343px] md:max-w-[459px] mx-auto xl:max-w-none">
      <p className="heading-lg text-kb-grey-dark-secondary">
        This board is empty. Create a new column to get started.
      </p>
      <Button>+ Add New Column</Button>
    </div>
  );
};
