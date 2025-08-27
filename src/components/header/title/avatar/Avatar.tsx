import avatarCss from "./avatar.module.css";

import meJpg from "@/assets/avatar.jpg";


export default function Avatar() {
    return (
        <img
            src={meJpg}
            className={avatarCss.image}
        />
    );
}
