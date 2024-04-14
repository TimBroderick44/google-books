import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={style.footer}>
            <div>
                <p className={style.disclaimer}>
                    This is a personal project and is not affiliated with
                    Google.com
                </p>
                <p className={style.copyright}>{`© ${currentYear} Tim Broderick`}</p>
            </div>
        </footer>
    );
};

export default Footer;
