function Add({ onClose }) {
    const handleCancel = () => {
        onClose();
    };

    const handleConfirm = () => {
        onClose();
    };

    return (
        <div id="crud-modal" tabIndex="-1" aria-hidden="true" className="p-2 fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full dark:bg-gray-800">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add a New App</h3>
                    <button type="button" onClick={handleCancel} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <form className="p-4">
                    <div className="grid gap-4 mb-5 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type the app name" required />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="logo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Logo</label>
                            <input type="text" name="logo" id="logo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave empty for none" required />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={handleConfirm} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                        <button type="button" onClick={handleCancel} className="ml-2 text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-500">Cancel</button>
                    </div>
                </form>
            </div>
        </div>         
    );
}

export default Add;
