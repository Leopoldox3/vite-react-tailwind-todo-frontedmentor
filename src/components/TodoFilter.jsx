const TodoFilter = ({ changeFilter }) => {
    return (
        <section className="container mx-auto mt-7">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4 transition-all duration-1000 dark:bg-gray-800">
                <button
                    className="dark.  transition-all duration-1000 hover:text-blue-600 dark:text-white"
                    onClick={() => changeFilter("all")}
                >
                    ALL
                </button>
                <button
                    className=" transition-all duration-1000 hover:text-blue-600 dark:text-white "
                    onClick={() => changeFilter("active")}
                >
                    Active
                </button>
                <button
                    className=" transition-all duration-1000 hover:text-blue-600 dark:text-white"
                    onClick={() => changeFilter("completed")}
                >
                    Complete
                </button>
            </div>
        </section>
    );
};
export default TodoFilter;
