import * as Form from "@radix-ui/react-form";

import { useBoardStore } from "./store";

import Button from "../../common/Button/Button";
import Column from "../Column";

const BoardForm = () => {
  const { columns, addColumn, updateColumn, deleteColumn } = useBoardStore();

  return (
    <>
      <Form.Root>
        <Form.Field className="grid" name="boardName">
          <div className="flex items-baseline justify-between mb-2">
            <Form.Label className="text-kb-grey-dark-secondary dark:text-white heading-sm tracking-normal">
              Board Name
            </Form.Label>
            <Form.Message className="text-xs text-white" match="valueMissing">
              Please enter a Board name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="text-kb-black-primary dark:text-white rounded border border-kb-grey-dark-secondary/25 bg-transparent py-2 pl-4 pr-2 placeholder:copy-lg outline-none focus:border-kb-purple-primary copy-lg"
              type="text"
              required
              placeholder="e.g. Web Design"
            />
          </Form.Control>
        </Form.Field>

        <div className="my-6">
          <p className="text-kb-grey-dark-secondary dark:text-white heading-sm tracking-normal mb-2">
            Board Columns
          </p>

          <div className="space-y-3 mb-3">
            {columns.map((column) => (
              <Column
                key={column.columnId}
                column={column}
                onDelete={deleteColumn}
                onUpdate={updateColumn}
              />
            ))}
          </div>

          <Button
            size="large"
            intent="secondary"
            className="w-full"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              addColumn();
            }}
          >
            + Add New Column
          </Button>
        </div>

        <Button size="large" className="w-full">
          Create New Board
        </Button>
      </Form.Root>
    </>
  );
};

export default BoardForm;
