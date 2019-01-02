import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
	<nav className="navdiv">
	<div className="nav-wrapper">
		<a className="brand-logo center" href="/">
			New York Times Articles</a>
		<ul className="right hide-on-med-and-down">
			<li>
				<Link
					to="/"
					className={
						window.location.pathname === "/" ? "nav-link active" : "nav-link"
					}
				>
					Home
		</Link>
			</li>
			<li>
				<Link
					to="/saved"
					className={
						window.location.pathname === "/saved" ? "nav-link active" : "nav-link"
					}
				>
					Saved
		</Link>
			</li>
		</ul>

	</div>

	</nav>
);

export default Nav;

