import avatarCss from "./avatar.module.css";

import meJpg from "@/assets/avatar.jpeg";


export default function Avatar() {
    return (
        <img
            src={meJpg}
            className={avatarCss.image}
        />
    );
}
