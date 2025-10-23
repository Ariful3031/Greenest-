import React from "react";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#FFF0E1] text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Privacy </a>
                <a className="link link-hover">Policy</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">

                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current hover:text-pink-500 transition"
                        >
                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm8.5 1.5h-8.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm-4.25 4a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
                        </svg>
                    </a>


                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current hover:text-blue-500 transition"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667C17 5.378 17.192 5 18.115 5H21V0h-3.808C13.596 0 12 1.583 12 4.615V8H9z"></path>
                        </svg>
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current hover:text-red-500 transition"
                        >
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 4.99 3.657 9.128 8.438 10.291-.117-.873-.223-2.21.047-3.164.242-.837 1.56-5.332 1.56-5.332s-.397-.794-.397-1.968c0-1.841 1.067-3.214 2.395-3.214 1.13 0 1.676.848 1.676 1.866 0 1.137-.723 2.839-1.094 4.419-.312 1.316.661 2.39 1.962 2.39 2.355 0 4.165-2.484 4.165-6.065 0-3.172-2.28-5.388-5.538-5.388-3.773 0-5.996 2.83-5.996 5.757 0 1.147.442 2.378.995 3.048a.4.4 0 0 1 .092.383c-.1.42-.328 1.334-.373 1.52-.058.24-.19.292-.44.176-1.64-.76-2.666-3.145-2.666-5.06 0-4.12 2.993-7.907 8.633-7.907 4.534 0 8.06 3.231 8.06 7.544 0 4.502-2.838 8.13-6.776 8.13-1.324 0-2.569-.688-2.995-1.505l-.815 3.106c-.293 1.108-1.085 2.495-1.617 3.34.788.244 1.621.376 2.492.376 6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                        </svg>
                    </a>
                </div>
            </nav>
            <aside>
                <p>“© {new Date().getFullYear()} GreenNest. All rights reserved.”</p>
            </aside>
        </footer>
    );
};

export default Footer;
