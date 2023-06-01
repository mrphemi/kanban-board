import Task from "./Task";

const Column = () => {
  return (
    <div className="overflow-y-scroll flex flex-col space-y-6 min-w-[280px] max-w-[280px]">
      <h2 className="heading-sm uppercase text-kb-grey-dark-secondary flex items-center">
        <span className="w-4 h-4 bg-kb-purple-secondary mr-3 rounded-full"></span>
        Todo ({4})
      </h2>
      <div className="overflow-y-scroll flex flex-col space-y-5">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default Column;
