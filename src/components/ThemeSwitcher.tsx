const ThemeSwitcher = ()=> {
    return (
        <div className="flex gap-2 ">
            <button 
                // onClick={changeTheme}
            >
                {/* {darkMode ? (
                    <FaSun className="text-yellow-500" />
                ) : (
                    <FaMoon className="text-gray-900" />
                )} */}
            </button>
            <div 
                className="font-bold" 
                // onClick={changeTheme}
            >
                {/* {darkMode ? <h1>Light Mode</h1> : <h1>Dark Mode</h1>} */}
            </div>
        </div>
    )
}

export default ThemeSwitcher;