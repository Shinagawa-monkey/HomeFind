import bgImg from "../../assets/bg.webp"
import bgImgPng from "../../assets/bg.png";
import "./Home.scss";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Home() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find Your Dream Home, Anywhere in the World</h1>
                    <p>HomeFind is your global real estate companion. Explore properties in countless locations, connect with local agents, and make your dream a reality.</p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imageContainer">
                <picture>
                    <source srcSet={bgImg} type="image/webp" />
                    <img src={bgImgPng} alt="Hero section image" />
                </picture>
            </div>
        </div >
    )
}