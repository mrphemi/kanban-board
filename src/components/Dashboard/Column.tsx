import * as Form from "@radix-ui/react-form";

import { Column } from "@/lib/types";

interface ColumnProps {
  column: Column;
  onUpdate: (id: string, name: string) => void;
  onDelete: (id: string) => void;
}

const Column = ({ column, onDelete, onUpdate }: ColumnProps) => {
  return (
    <div className="flex items-center gap-x-4">
      <Form.Field className="w-full" name="column">
        <Form.Control asChild>
          <input
            className="text-white rounded border border-kb-grey-dark-secondary bg-transparent py-2 pl-4 pr-2 placeholder:copy-lg w-full outline-none"
            type="text"
            required
            placeholder="Enter column name"
            value={column.name}
            onChange={(e) => onUpdate(column.columnId, e.target.value)}
          />
        </Form.Control>
      </Form.Field>
      <svg
        width="15"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
        onClick={() => onDelete(column.columnId)}
      >
        <g
          fill="#828FA3"
          fillRule="evenodd"
          className="hover:fill-kb-mandy-primary"
        >
          <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
          <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
        </g>
      </svg>
    </div>
  );
};

export default Column;
