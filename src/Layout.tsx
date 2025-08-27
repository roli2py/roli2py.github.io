import Header from "./components/header/Header";

import { Outlet } from "react-router";

import "normalize.css";
import layoutCss from "./layout.module.css";

export default function Layout() {
    return (
        <div className={`${layoutCss.interFont} ${layoutCss.background} ${layoutCss.topHolder}`}>
            <div className={layoutCss.weakLight} style={{ left: "-2em", bottom: "-2em", backgroundColor: "#C54500" }} />
            <div className={layoutCss.weakLight} style={{ right: "-2em", top: "-2em", backgroundColor: "#CC6600" }} />
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
