export default () => {
    return (
        <article className="bg-white dark:bg-slate-600 font-mono rounded-lg w-96 shadow-lg">
            <header className="p-6">
                <h2 className=" text-slate-900 dark:text-slate-200 text-xl font-semibold">Headline</h2>
                <p className="text-slate-600 dark:text-slate-300">Please add your content here. Keep it short and simple. And smile :)</p>
            </header>
            <img src="/assets/mountains.jpg" className="min-w-full object-cover h-2/4"></img>
            <footer className="flex items-center justify-around py-5">
                <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-gray-300"></div>
                    <span className="text-slate-500 dark:text-gray-300">Text</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-gray-300"></div>
                    <span className="text-slate-500 dark:text-gray-300">Text</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-gray-300"></div>
                    <span className="text-slate-500 dark:text-gray-300">Text</span>
                </div>
            </footer>
        </article>
    )
}