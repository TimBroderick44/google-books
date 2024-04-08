import React from "react";
import style from "./Header.module.scss";

const Header = () => {
    return (
        <>
            <img
                className={style.logo}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Google_Books_logo_2020.svg/2560px-Google_Books_logo_2020.svg.png"
                alt="Google Logo"
            />
            <h1 className={style.heading}>API Search</h1>
        </>
    );
};

export default Header;
