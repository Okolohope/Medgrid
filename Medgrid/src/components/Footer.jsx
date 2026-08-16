import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="mt-auto border-t border-green-200 bg-white/70 px-4 py-6 backdrop-blur-sm sm:px-6 lg:px-8">
			<div className="mx-auto flex max-w-7xl flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
				<p className="text-sm text-gray-700">
					© {new Date().getFullYear()} MedGrid_Ng. All rights reserved.
				</p>

				<div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-700 sm:justify-end">
					<Link to="/" className="hover:text-green-600">
						Home
					</Link>
					<Link to="/about" className="hover:text-green-600">
						About Us
					</Link>
					<Link to="/benefits" className="hover:text-green-600">
						Benefits
					</Link>
					<Link to="/solutions" className="hover:text-green-600">
						Solutions
					</Link>
					<Link to="/contact" className="hover:text-green-600">
						Contact Us
					</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
