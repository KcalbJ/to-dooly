import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import Taskform from "./Taskform";
interface Task {
    id: number;
    name: string;
    completed: boolean;

}

function Hero() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
    
    const addTask = (taskName: string) => {
        const newTask: Task = {
            id: tasks.length + 1,
            name: taskName,
            completed: false
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId: number) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const toggleTaskCompletion = (taskId: number) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const clearCompletedTasks = () => {
        const remainingTasks = tasks.filter(task => !task.completed);
        const completed = tasks.filter(task => task.completed);
        setTasks(remainingTasks);
        setCompletedTasks(completed);
    };

    return (
        <>
            <main className="grid gap-4 p-4 w-3/4 mx-auto">
                <Taskform addTask={addTask} />
                {tasks.map(task => (
                    <div key={task.id} className="flex items-center gap-4">
                        <input type="checkbox" className="h-4 w-4" id={`task${task.id}`} checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} />
                        <label className="flex-1" htmlFor={`task${task.id}`}>
                            {task.name}
                        </label>
                        <button className="h-6 w-6 rounded-lg" onClick={() => deleteTask(task.id)}>
                            <FaTrash className="h-4 w-4 text-red-400" />
                            <span className="sr-only">Delete task</span>
                        </button>
                    </div>
                ))}
            </main>
            <footer className="border-t p-4 flex justify-center items-center gap-4">
                <span>{tasks.length} tasks remaining</span>
                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={clearCompletedTasks}>Clear completed</button>
            </footer>
        </>
    );
}

export default Hero;
