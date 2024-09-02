import { useState } from "react"
import "./SearchBar.scss";
import SearchIcon from "../../assets/search.png";

const btnTypes = ["buy", "rent"];

export default function SearchBar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0
    });

    function handleBtnClick(btnType) {
        setQuery((prevQuery) => ({
            ...prevQuery,
            type: btnType
        }));
    }

    return (
        <div className="searchBar">
            <div className="type">
                {btnTypes.map((type) => (
                    <button
                        key={type}
                        type="button"
                        onClick={() => handleBtnClick(type)}
                        className={query.type === type ? "active" : ""}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <form action="">
                <input type="text" name="location" placeholder="City Location" />
                <input type="text" name="minPrice" min={0} max={10000000} placeholder="Min Price" />
                <input type="text" name="maxPrice" min={0} max={10000000} placeholder="Max Price" />
                <button><img src={SearchIcon} alt="Magnifying glass" /></button>
            </form>
        </div>
    )
}