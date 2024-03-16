function Footer() {
    return (
        <footer className="bg-white rounded-lg dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://github.com/valekatoz/SideReminder/tree/main/src/assets/img/logo.jpeg" className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SideReminder</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://github.com/valekatoz/" className="hover:underline me-4 md:me-6">Developer</a>
                        </li>
                        <li>
                            <a href="https://github.com/valekatoz/SideReminder" className="hover:underline me-4 md:me-6">Github Repo</a>
                        </li>
                        <li>
                            <a href="https://github.com/valekatoz/SideReminder/blob/main/LICENSE" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="mailto:contact@valekatoz.com" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/valekatoz/SideReminder" className="hover:underline">SideReminder</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
