import Avatar from "./avatar/Avatar";

import { Link } from "react-router";

import titleCss from "./title.module.css";


export default function Title() {
    return (
        <Link
            to="/"
            className={titleCss.title}
        >
            <Avatar />
            <h1 className={titleCss.titleText}>
                roli2py
            </h1>
        </Link>
    );
}
