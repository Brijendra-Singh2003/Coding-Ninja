import { Link } from "react-router-dom";
import { active } from "../../pages/Events/Events";
import { scrollToTop } from "../..";

const Footer = () => (
    <footer className="bg-black">
        <div className="mx-auto px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
            <div className="grid grid-cols-1 mx-auto max-w-screen-xl gap-8 lg:grid-cols-3">
                <div>
                    <div className="flex justify-center sm:justify-start">
                        <img
                            src="https://files.codingninjas.com/new-cn-logos-31142.svg"
                            alt="logo"
                        />
                    </div>

                    <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 sm:max-w-xs sm:text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Incidunt consequuntur amet culpa cum itaque neque.
                    </p>

                    <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                        <li>
                            <a
                                href="https://www.linkedin.com/company/coding-ninjas-sc-iiit-bbsr/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-300 transition hover:text-gray-100"
                            >
                                <span className="sr-only">Linkedin</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 50 50"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.instagram.com/coding_ninjas_iiitbh/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-300 transition hover:text-gray-100"
                            >
                                <span className="sr-only">Instagram</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>

                        {/* <li>
                            <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-300 transition hover:text-gray-100"
                            >
                                <span className="sr-only">Twitter</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-300 transition hover:text-gray-100"
                            >
                                <span className="sr-only">GitHub</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li> */}
                    </ul>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900 dark:text-white">
                            Helpful Links
                        </p>

                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    to="/"
                                    onClick={scrollToTop.value}
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    to="/events"
                                    onClick={()=>{active.value = false; scrollToTop.value()}}
                                >
                                    Upcomming Events
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    to="/events"
                                    onClick={()=>{active.value = true; scrollToTop.value()}}
                                >
                                    Past Events
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    to="/team"
                                    onClick={scrollToTop.value}
                                >
                                    Our Team
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900 dark:text-white">
                            Contact Us
                        </p>

                        <ul className="mt-8 space-y-4 text-sm">
                            {/* <li>
                                <a
                                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                    href="/"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0 text-gray-900 dark:text-white hidden md:block"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>

                                    <span className="flex-1 text-gray-700 dark:text-gray-300">
                                        john@doe.com
                                    </span>
                                </a>
                            </li> */}

                            <li>
                                <a
                                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                    href="/"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0 text-gray-900 dark:text-white hidden md:block"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>

                                    <span className="flex-1 text-gray-700 dark:text-gray-300">
                                        91988 51103
                                    </span>
                                </a>
                            </li>

                            <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0 text-gray-900 dark:text-white hidden md:block"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>

                                <address className="-mt-0.5 flex-1 not-italic text-gray-700 dark:text-gray-300">
                                    Gothapatna, IIIT Bhubaneshwar
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-12 max-w-screen-xl mx-auto border-t border-gray-100 pt-6 dark:border-gray-800">
                <div className="text-center sm:flex sm:justify-between sm:text-left">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="block sm:inline">
                            All rights reserved.
                        </span>
                    </p>

                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:order-first sm:mt-0">
                        &copy; 2022 Coding Nunjas IIIT Bhubaneshwar
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
