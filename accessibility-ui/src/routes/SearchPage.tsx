import SearchBar from "../components/SearchBar";
import "./search.css"

export default function SearchPage() {
    return (
        <div className="search-page">
            <h1>Fix Your Accessiblity 💻</h1>
            <SearchBar></SearchBar>
            <p>Or manually upload an HTML file <a href='about:blank'>here</a></p>
        </div>
    )
}