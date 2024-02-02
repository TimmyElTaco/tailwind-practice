import { useState } from 'react'

export default () => {
    const [ darkTheme, setDarkTheme ] = useState(false);

    const text = darkTheme ? 'Light theme' : 'Dark theme';
    const handleClick = () => {
        document.documentElement.classList.toggle('dark')
        setDarkTheme(!darkTheme);
    }

    return (
        <button className='px-5 py-3 bg-slate-900 dark:bg-slate-400 text-white dark:text-black rounded-lg font-mono hover:bg-slate-700 dark:hover:bg-slate-600 dark:hover:text-white transition-colors duration-300 w-40' onClick={handleClick}>{text}</button>   
    )
}