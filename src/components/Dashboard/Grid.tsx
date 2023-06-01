import Column from "./Column";

const Grid = () => {
  return (
    <div className="overflow-scroll flex gap-x-6 max-h-[calc(100vh-119px)]">
      <Column />
      <Column />
      <Column />
      <Column />
    </div>
  );
};

export default Grid;
