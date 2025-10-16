import { NavLink } from "react-router";
import "../styles/Navbar.css";

export function Navbar(){
	return <nav>
		<NavLink to={"/"}>
			Home
		</NavLink>
		{" | "}
		<NavLink to={"/about"}>
			About
		</NavLink>
		{" | "}
		<NavLink to={"/search"}>
			Search
		</NavLink>
	</nav>
}
