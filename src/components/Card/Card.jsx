import { Link } from "react-router-dom";
import PinIcon from "../../assets/pin.png";
import BedIcon from "../../assets/bed.png";
import BathIcon from "../../assets/bath.png";
import SaveIcon from "../../assets/save.png";
import ChatIcon from "../../assets/chat.png";
import "./Card.scss";

export default function Card({ item }) {
    return (
        <div className="card">
            <Link to={`/${item.id}`} className="imageContainer">
                <img src={item.img} alt={item.title} loading="lazy" />
            </Link>
            <div className="textContainer">
                <h2 className="title">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>
                <p className="address">
                    <img src={PinIcon} alt="A pin icon" />
                    <span>{item.address}</span>
                </p>
                <p className="price">$ {item.price}</p>
                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src={BedIcon} alt="A bed icon" />
                            <span>{item.bedroom} bedroom</span>
                        </div>
                        <div className="feature">
                            <img src={BathIcon} alt="A bath icon" />
                            <span>{item.bathroom} bathroom</span>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src={SaveIcon} alt="A save icon" />
                        </div>
                        <div className="icon">
                            <img src={ChatIcon} alt="A chat icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}