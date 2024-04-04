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
                <input className="flex-1 min-w-0 text-black  rounded-lg px-5 py-2.5 h-10 border" placeholder="Add a new task..." type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit">Submit</button>
            </div>
        </form>
    );
}

export default Taskform;