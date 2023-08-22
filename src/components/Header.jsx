import { useEffect, useState } from "react";

import IconMoon from "./icons/IconMoon";
import IconSun from "../components/icons/IconSun";

const inicialStateDarkmode = localStorage.getItem("theme") === "dark";
const header = () => {
    const [darkMode, setDarkMode] = useState(inicialStateDarkmode);

    useEffect(() => {
        //hacemos la validacion del theme y guardamos en el local storage
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [darkMode]);
    const toggleTheme = () => {};
    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    );
};

export default header;
