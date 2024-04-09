import PropTypes from 'prop-types';

const Task = ({tasks, setTasks}) => {

    const handleComplete = (id) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: true };
            }
            return task;
        });

        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleDelete = (id) => {
        const updatedTasks = tasks.filter(task => task.id != id);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };
    
    return (
    <div className='container'>
        <ul>
            {tasks.map((t) => (
                <li key={t.id} className="overflow-auto mb-6 shadow-md transition ease-in-out hover:duration-300 hover:-translate-y-1 p-5 rounded bg-gray-50">
                    <div className='md:flex md:justify-between md:items-center'>
                        <div className='flex gap-2'>
                            <span className='text-sm md:text-xl'>{`${t.completed ? `✅ `: `✏️ ` }`}</span>
                            <p 
                                className={`${t.completed ? "line-through decoration-wavy decoration-4 decoration-green-500 text-sm md:text-lg" 
                                : "text-sm break-words md:text-lg"}`}
                            >
                                {t.task}
                            </p>
                        </div>

                        <div className="flex gap-3 xs:justify-start mt-4 md:mt-0">
                            <button 
                                className={`${t.completed ? "text-sm bg-gray-300 py-1 px-3 rounded gap-1 text-white font-semibold cursor-not-allowed" 
                                                            : "text-sm bg-green-600 hover:bg-green-700 py-1 px-3 rounded gap-1 text-white font-semibold"}`}
                                onClick={() => handleComplete(t.id)}
                            >
                                Completed
                            </button>

                            <button 
                                className="text-sm bg-red-600 hover:bg-red-700 py-1 px-3 rounded gap-1 text-white font-semibold"
                                onClick={() => handleDelete(t.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

Task.propTypes = {
    tasks: PropTypes.array.isRequired,
    setTasks: PropTypes.func.isRequired
};

export default Task