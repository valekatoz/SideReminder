function Card({ appName = "NULL" }) {
    return (
        <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
                <div className="relative">
                </div>
            </div>
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Logo"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{appName}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                <div className="flex mt-4 md:mt-6">
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</button>
                    <button className="ml-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
