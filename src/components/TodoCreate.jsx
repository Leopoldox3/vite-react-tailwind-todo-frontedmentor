import { useState } from "react";
const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();

        if (title.trim().length > 0) {
            createTodo(title);
        }
        setTitle("");
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="mb-6 mt-7 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4 transition-all duration-1000 dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full font-light text-gray-400 outline-none transition-all duration-1000 dark:bg-gray-800"
                type="text"
                placeholder="Create a new todo..."
                value={title}
                onChange={handleTitleChange}
            />
        </form>
    );
};

export default TodoCreate;
