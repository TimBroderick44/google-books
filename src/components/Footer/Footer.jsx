import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={style.footer}>
            <div>{`© ${currentYear} Tim Broderick`}
                <p className={style.disclaimer}>
                    This is a personal project and is not affiliated with
                    Google.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
