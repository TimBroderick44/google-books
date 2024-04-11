import SearchProvider from "./context/SearchProvider.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import BookLoader from "./components/BookLoader/BookLoader.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HeaderSearchContainer from "./containers/HeaderSearchContainer/HeaderSearchContainer.jsx";
import "./App.module.scss";

function App() {
    return (
        <SearchProvider>
            <HeaderSearchContainer>
                <Header />
                <SearchBar />
            </HeaderSearchContainer>
            <BookLoader />
            <Footer />
        </SearchProvider>
    );
}

export default App;
