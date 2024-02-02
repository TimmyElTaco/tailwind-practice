export default () => {
    return (
        <article className="w-96 h-auto bg-white dark:bg-slate-600 rounded-lg overflow-hidden shadow-lg">
            <img src="/assets/mountains.jpg" className="min-w-full object-cover h-2/4"></img>
            <div className="p-6">    
                <div>
                    <h3 className="font-mono text-xl font-semibold text-gray-900 dark:text-gray-200">Headline</h3>
                    <span className="text-gray-800 dark:text-gray-300 font-mono">Subhead</span>
                    <p className="font-mono text-pretty leading-5 text-gray-600 dark:text-gray-300 py-4">Please add your content here. Keep it short and simple. And smile :)</p>
                </div>
                <div className="w-full h-px bg-gray-400"></div>
                <div>
                    <h4 className="font-mono pt-3 text-base text-gray-800 dark:text-gray-200">Title</h4>
                    <div className="flex items-center gap-4 pt-1 pb-3">
                        <a className="font-mono border-2 px-2 py-1 border-gray-400 dark:text-gray-200 rounded-3xl tracking-wide">Tag 1</a>
                        <a className="font-mono border-2 px-2 py-1 border-gray-400 dark:text-gray-200 rounded-3xl tracking-wide">Tag 2</a>
                        <a className="font-mono border-2 px-2 py-1 border-gray-400 dark:text-gray-200 rounded-3xl tracking-wide">Tag 3</a>
                        <a className="font-mono border-2 px-2 py-1 border-gray-400 dark:text-gray-200 rounded-3xl tracking-wide">Tag 4</a>
                    </div>
                    <button className="font-mono bg-gray-800 dark:bg-gray-300 text-white dark:text-black px-3 py-1 rounded-xl">Button</button>
                </div>
            </div>
        </article>
    )
}