import Header from "./components/header/Header";

import { Outlet } from "react-router";

import "normalize.css";
import layoutCss from "./layout.module.css";

export default function Layout() {
    return (
        <div className={layoutCss.interFont}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
