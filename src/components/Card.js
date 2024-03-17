import { useState } from 'react';
import Delete from './modals/Delete';
import Refresh from './modals/Refresh';
import Add from './modals/Add';

function Card({ appLogo = "https://raw.githubusercontent.com/valekatoz/SideReminder/main/src/assets/img/placeholder.jpg", appName = "App", expiry = "Expired" }) {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showRefreshModal, setShowRefreshModal] = useState(false);

    const handleAdd = () => {
        setShowAddModal(true);
    };

    const handleDelete = () => {
        setShowDeleteModal(true);
    };

    const handleRefresh = () => {
        setShowRefreshModal(true);
    };

    const handleCloseAddModal = () => {
        setShowAddModal(false);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const handleCloseRefreshModal = () => {
        setShowRefreshModal(false);
    };

    return (
        <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {showAddModal && <Add onClose={handleCloseAddModal} />}
            {showDeleteModal && <Delete onClose={handleCloseDeleteModal} />}
            {showRefreshModal && <Refresh onClose={handleCloseRefreshModal} />}
            <div className="flex justify-end px-4 pt-4">
                <div className="relative">
                </div>
            </div>
            <div className="flex flex-col items-center pb-10">
                <img className="mt-6 w-24 h-24 mb-3 rounded-full shadow-lg" src={appLogo} alt="App Logo"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{appName}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{expiry}</span>
                <div className="flex mt-4 md:mt-6">
                    {
                        appName !== "App" ? 
                        <div>
                            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleRefresh}>Refresh</button>
                            <button className="ml-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleDelete}>Delete</button>
                        </div> : <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  onClick={handleAdd}>Add</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;
