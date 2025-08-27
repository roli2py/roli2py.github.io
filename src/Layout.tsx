import Header from "./components/header/Header";

import { Outlet } from "react-router";

import layoutCss from "./layout.module.css";

export default function Layout() {
    const orangeWeakLightStyle = {
        left: "-2em",
        bottom: "-2em",
        backgroundColor: "#C54500",
    };
    const lightOrangeWeakLightStyle = {
        right: "-2em",
        top: "-2em",
        backgroundColor: "#CC6600",
    };

    return (
        <>
            {/*
            Add two weak lights: one orange in the left-bottom corner
            and one light orange in the right-top corner. A `style` attr
            are used to make any weak lights: with a different color and
            position
            */}
            <div
                className={layoutCss.weakLight}
                style={orangeWeakLightStyle}
            />
            <div
                className={layoutCss.weakLight}
                style={lightOrangeWeakLightStyle}
            />
            <div className={`${layoutCss.interFont} ${layoutCss.topHolder}`}>
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
}
