import { useState } from "react";

interface TaskFormProps {
    addTask: (taskName: string) => void;
}

function Taskform({ addTask }: TaskFormProps) {
    const [value, setValue] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value.trim() !== "") {
            addTask(value.trim());
            setValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
                <input className="flex-1 min-w-0" placeholder="Add a new task..." type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default Taskform;