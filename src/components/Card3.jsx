export default () => {
    return (
        <article className="w-96 h-auto bg-white dark:bg-amber-700 rounded-lg overflow-hidden shadow-lg">
            <img src="/assets/mountains.jpg" className="w-full h-1/2 object-cover"></img>
            <div className="p-6 flex gap-3 flex-col">
                <header>
                    <h2 className="font-sans font-bold text-2xl text-gray-800 dark:text-gray-200">Name Lastname</h2>
                    <span className="text-gray-400 dark:text-gray-100 dark:opacity-50 font-semibold text-sm">Profesion or enterprise</span>
                </header>
                <p className="text-gray-600 dark:text-gray-300 text-pretty">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente esse autem iusto nemo doloremque dolorem deleniti quisquam unde dignissimos.
                </p>
                <button className="p-3 bg-amber-700 dark:bg-white text-white dark:text-amber-700 text-xl font-semibold rounded-md">Learn More</button>
            </div>
        </article>
    );
}