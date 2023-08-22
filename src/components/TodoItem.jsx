import IconCheck from "../components/icons/IconCheck";
import CrossIcon from "../components/icons/CrossIcon";
const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, completed } = todo;
    return (
        <article className="flex gap-4 border-b border-b-gray-400 ">
            <button
                className={`h-5 w-5 flex-none rounded-full border-2 ${
                    completed
                        ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "inline-block"
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <IconCheck />}
            </button>
            <p
                className={`grow text-gray-600 dark:text-gray-300 ${
                    completed && "underline"
                } transition-all duration-1000`}
            >
                {title}
            </p>
            <button onClick={() => removeTodo(id)}>
                <CrossIcon />
            </button>
        </article>
    );
};

export default TodoItem;
