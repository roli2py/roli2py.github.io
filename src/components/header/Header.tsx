import Title from "./title/Title";
import Navigation from "./navigation/Navigation";

import headerCss from "./header.module.css";


export default function Header() {
    return (
        <header className={headerCss.lexendFont}>
            <Title />
            <Navigation />
        </header>
    );
}
