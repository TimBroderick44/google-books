import SearchProvider from "./context/SearchProvider.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import BookLoader from "./components/BookLoader/BookLoader.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FlexboxBordered from "./containers/FlexboxBordered/FlexboxBordered.jsx";
import "./App.module.scss";

function App() {

    return (
        <SearchProvider>
            <FlexboxBordered>
                <Header />
                <SearchBar />
            </FlexboxBordered>
            <BookLoader />
            <Footer />
        </SearchProvider>
    );
}

export default App;
