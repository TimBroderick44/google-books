import React, { useContext} from "react";
import { SearchContext } from "../../context/SearchProvider.jsx";
import style from "./Header.module.scss";



const Header = () => {

    const { hasSearched } = useContext(SearchContext);

    return (
        <>
            <img
                className={`${
                    hasSearched ? style.topLogo : style.middleLogo
                }`}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Google_Books_logo_2020.svg/2560px-Google_Books_logo_2020.svg.png"
                alt="Google Logo"
            />
        {/* If hasSearched is true, transition up to the top of the page */}
            <h1
                className={`${
                    hasSearched ? style.topHeading : style.middleHeading
                }`}
            >
                API Search
            </h1>
        </>
    );
};

export default Header;
