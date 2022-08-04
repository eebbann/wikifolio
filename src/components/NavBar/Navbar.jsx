import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../App.css"

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link to="/" className="fs-3 ubuntu navbar-brand" href="#">
					<span className="text-primary">WiKiFolio</span>
				</Link>
				<button
					className="navbar-toggler "
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				{/* css */} 
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav">
						<NavLink activeClassName="active" to="/" className="nav-link" href="#">
							Character
						</NavLink>
						<NavLink to="/episodes" className="nav-link" href="#">
							Episodes
						</NavLink>
						 
						<NavLink to="location" className="nav-link" href="#">
							Location
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
