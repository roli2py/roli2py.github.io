import { Link } from "react-router";

import "./navigation.css";


export default function Navigation() {
    return (
        <nav>
            <li>
                <Link
                    to="/projects"
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    to="/about-me"
                >
                    About me
                </Link>
            </li>
            <li>
                <Link
                    to="/contacts"
                >
                    Contacts
                </Link>
            </li>
            <li>
                <Link
                    to="/support"
                >
                    Support
                </Link>
            </li>
        </nav>
    );
}
