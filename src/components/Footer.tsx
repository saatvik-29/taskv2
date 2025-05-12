import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Logo and Tagline */}
        <div className="mb-8">
          <Image
            src={"/CompanyLogo.svg"}
            alt="Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <p className="text-gray-400">
            Generate outside the box thinking with the possibility to target
            the low.
          </p>
        </div>

        {/* Main Content - 4 boxes in a row that wrap */}
        <div className="flex flex-wrap justify-between mb-10">
          {/* Resources Box */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 pr-4">
            <h3 className="text-white text-lg font-semibold mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Box */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 pr-4">
            <h3 className="text-white text-lg font-semibold mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Email Notifications Box */}
          <div className="w-full lg:w-2/4 mb-8">
            <h3 className="text-white text-lg font-semibold mb-4">
              Get Email Notifications
            </h3>
            <p className="text-gray-400 mb-4">
              Generate outside the box thinking with the possibility to target
              the low
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter email..."
                className="flex-grow py-2 px-4 bg-gray-800 rounded text-gray-300 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-gray-800">
          <p className="mb-4 sm:mb-0">© 2023 Lookscout. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" aria-label="Facebook">
              <svg
                className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" aria-label="Google">
              <svg
                className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.48 10.92v3.28h4.92c-.2 1.14-.82 2.12-1.73 2.78v2.34h2.79c1.63-1.5 2.58-3.7 2.58-6.32 0-.6-.05-1.19-.15-1.75h-8.41z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M7.52 13.4c-.48-1.32-.48-2.76 0-4.08v-2.37H4.6c-1.47 2.73-1.47 5.99 0 8.72h2.92v-2.27z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M12 15c1.23 0 2.4-.42 3.28-1.13l-2.79-2.34c-.72.48-1.62.78-2.49.78-1.9 0-3.51-1.28-4.08-3l-2.92 1.23c.85 2.69 3.32 4.46 7 4.46z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M12 7.5c1.05 0 2.01.36 2.76.95l2.48-2.48C15.63 4.69 13.89 4 12 4c-3.68 0-6.15 1.77-7 4.46l2.92 1.23c.57-1.72 2.18-3 4.08-3z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" aria-label="Apple">
              <svg
                className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram">
              <svg
                className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
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
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;