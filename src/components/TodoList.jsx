import TodoItem from "./TodoItem";
const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        /* [&>article]:px-4 para agregar a un contenedor padre*/
        <div className="over rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
