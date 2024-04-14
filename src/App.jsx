import React, { useEffect } from "react";
import SearchProvider from "./context/SearchContext.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import BookLoader from "./components/BookLoader/BookLoader.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Timer from "./components/Timer/Timer.jsx";
import Flexbox from "./containers/Flexbox/Flexbox.jsx";
import HeaderSearchContainer from "./containers/HeaderSearchContainer/HeaderSearchContainer.jsx";
import { DelayProvider } from "./context/DelayContext.jsx";

function App() {

        useEffect(() => {
            document.title = "Google Books API Search";
        }, []);

    return (
        <DelayProvider>
            <SearchProvider>
                <Flexbox flexdirection="column" alignitems="center">
                    <HeaderSearchContainer>
                        <Header />
                        <SearchBar />
                    </HeaderSearchContainer>
                    <BookLoader />
                    <Timer />
                    <Footer />
                </Flexbox>
            </SearchProvider>
        </DelayProvider>
    );
}

export default App;
