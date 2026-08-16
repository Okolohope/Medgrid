import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
    return (
        <>
            {/* 1. Mobile Overlay (Dark background when sidebar is open) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                    onClick={onClose}
                ></div>
            )}

            {/* Sidebar with dynamic Tailwind classes */}
                        <aside className={`
                fixed inset-y-0 left-0 z-30 md:hidden
                transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                transition-transform duration-300 ease-in-out
                bg-white border-r border-gray-200 w-64 min-h-screen
            `}>
                <nav className="p-4">
                    {/* Close button for mobile */}
                    <button onClick={onClose} className="md:hidden mb-4 text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <ul className="space-y-2">
                      <li>
                         <NavLink to="/" onClick={onClose} className={({ isActive }) => isActive ? 'block px-4 py-2 rounded-lg bg-blue-50 text-green-600 font-medium' : 'block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100'}>Home</NavLink>
                     </li>
                      <li>
                         <NavLink to="/about" onClick={onClose} className={({ isActive }) => isActive ? 'block px-4 py-2 rounded-lg bg-blue-50 text-green-600 font-medium' : 'block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100'}>About Us</NavLink>
                     </li>
                      <li>
                         <NavLink to="/benefits" onClick={onClose} className={({ isActive }) => isActive ? 'block px-4 py-2 rounded-lg bg-blue-50 text-green-600 font-medium' : 'block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100'}>Benefits</NavLink>
                      </li>
                      <li>
                         <NavLink to="/solutions" onClick={onClose} className={({ isActive }) => isActive ? 'block px-4 py-2 rounded-lg bg-blue-50 text-green-600 font-medium' : 'block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100'}>Solutions</NavLink>
                      </li>
                      <li>
                         <NavLink to="/contact" onClick={onClose} className={({ isActive }) => isActive ? 'block px-4 py-2 rounded-lg bg-blue-50 text-green-600 font-medium' : 'block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100'}>Contact Us</NavLink>
                      </li>
                      <li>
                         <NavLink to="/waitlist" onClick={onClose} className={({ isActive }) => isActive ? 'block px-4 py-2 rounded-lg bg-blue-50 text-green-600 font-medium' : 'block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100'}>Join Waitlist</NavLink>
                      </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;