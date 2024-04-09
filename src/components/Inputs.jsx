import { useState } from "react";
import Task from "./Task";

const Inputs = () => {

    const [id, setId] = useState(0);
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    let completed = false;
    
    const handleInput = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task != '') {
            setId(prevId => prevId + 1);
            const newTask = { id, task, completed };
            setTasks(prevTasks => [...prevTasks, newTask]);

            localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
        }
        setTask('');
    }

  return (
    <div className="container mx-auto">
        <div className="max-w-full">
            
            <form>            
                <div className="flex flex-col md:flex-row items-center w-4/5 mx-auto gap-2 my-4">
                    <input id='task' 
                        className="border-solid border-2 rounded w-full p-1 text-sm md:text-base md:w-3/4"
                        placeholder="Input a new task" 
                        type="text"
                        value={task} 
                        onChange={handleInput}
                    />

                    <button 
                        className="border-solid border-2 rounded p-1 bg-indigo-700 text-white w-full cursor-pointer hover:bg-indigo-900 text-sm md:text-base md:w-1/4"
                        onClick={handleSubmit}>
                        Add Task
                    </button>
                </div>
            </form>
        </div>

        <div className="container mx-auto my-2 border-solid border-2 w-4/5 p-4 md:p-8 bg-white overflow-y-scroll h-96">
            <p className="text-xl mb-6 font-bold sm:text-2xl md:text-3xl">Tasks 📚</p>
                <Task 
                    tasks={tasks}
                    setTasks={setTasks}
                />
        </div>
    </div>
  )
}


export default Inputs