"use client";

import { useState } from "react";

import * as Form from "@radix-ui/react-form";

import { useBoardStore } from "./store";
import { Subtask } from "@/lib/types";

import Button from "../../common/Button/Button";
import Column from "../Column";
import TaskStatus from "./TaskStatus";

const statusList = ["todo", "doing", "done"];

const TaskForm = () => {
    const [subtasks, setSubtasks] = useState<Subtask[]>([]);

    const addSubTask = () => {
        const newSubTask = {
            id: crypto.randomUUID(),
            name: "",
            isCompleted: false,
        };
        setSubtasks([...subtasks, newSubTask]);
    };

    const deleteSubTask = (id: string) => {
        setSubtasks(subtasks.filter((subtask) => subtask.id !== id));
    };

    const updateSubTask = (id: string, name: string) => {
        setSubtasks(
            subtasks.map((subtask) => {
                if (subtask.id === id) {
                    return {
                        ...subtask,
                        name,
                    };
                }
                return subtask;
            })
        );
    };

    return (
        <>
            <Form.Root className="space-y-6">
                <Form.Field className="grid" name="title">
                    <div className="flex items-baseline justify-between mb-2">
                        <Form.Label className="text-kb-grey-dark-secondary dark:text-white heading-sm tracking-normal">
                            Title
                        </Form.Label>
                        <Form.Message
                            className="text-xs text-white"
                            match="valueMissing"
                        >
                            Please enter task title
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input
                            className=" text-kb-black-primary dark:text-white rounded border border-kb-grey-dark-secondary/25 bg-transparent py-2 pl-4 pr-2 placeholder:copy-lg outline-none focus:border-kb-purple-primary copy-lg"
                            type="text"
                            required
                            placeholder="e.g. Take coffee break"
                        />
                    </Form.Control>
                </Form.Field>

                <Form.Field className="grid" name="description">
                    <div className="flex items-baseline justify-between mb-2">
                        <Form.Label className="text-kb-grey-dark-secondary dark:text-white heading-sm tracking-normal">
                            Description
                        </Form.Label>
                        <Form.Message
                            className="text-xs text-white"
                            match="valueMissing"
                        >
                            Please enter task description
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <textarea
                            className="text-kb-black-primary dark:text-white rounded border border-kb-grey-dark-secondary/25 bg-transparent py-2 pl-4 pr-2 placeholder:copy-lg outline-none focus:border-kb-purple-primary copy-lg"
                            required
                            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
              recharge the batteries a little."
                            rows={5}
                        />
                    </Form.Control>
                </Form.Field>

                <div>
                    <p className="text-kb-grey-dark-secondary dark:text-white heading-sm tracking-normal mb-2">
                        Subtasks
                    </p>

                    <div className="space-y-3 mb-3">
                        {subtasks.map((subtask) => (
                            <Column
                                key={subtask.id}
                                column={{
                                    columnId: subtask.id,
                                    name: subtask.name,
                                }}
                                onDelete={deleteSubTask}
                                onUpdate={updateSubTask}
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
                            addSubTask();
                        }}
                    >
                        + Add New Subtask
                    </Button>
                </div>

                <div>
                    <h3 className="heading-sm text-kb-grey-dark-secondary dark:text-white mb-2">
                        Status
                    </h3>
                    <TaskStatus statusList={statusList} />
                </div>

                <Button size="large" className="w-full">
                    Create Task
                </Button>
            </Form.Root>
        </>
    );
};

export default TaskForm;
