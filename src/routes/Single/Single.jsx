import Slider from "../../components/Slider/Slider";
import Map from "../../components/Map/Map";
import { singlePostData, userData } from "../../lib/rentalData";
import PinIcon from "../../assets/pin.png";
import ChatIcon from "../../assets/chat.png";
import SaveIcon from "../../assets/save.png";
import UtilitiesIcon from "../../assets/utility.png";
import PetIcon from "../../assets/pet.png";
import FeesIcon from "../../assets/fee.png";
import SizeIcon from "../../assets/size.png";
import BedIcon from "../../assets/bed.png";
import BathIcon from "../../assets/bath.png";
import SchoolIcon from "../../assets/school.png";
import BusIcon from "../../assets/bus.png";
import RestaurantIcon from "../../assets/restaurant.png";
import "./Single.scss";

export default function Single() {
    return (
        <div className="single">
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images} title={singlePostData.title} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlePostData.title}</h1>
                                <div className="address">
                                    <img src={PinIcon} alt="A pin icon" />
                                    <span>{singlePostData.address}</span>
                                </div>
                                <div className="price">
                                    $ {singlePostData.price}
                                </div>
                            </div>
                            <div className="user">
                                <img src={userData.img} alt={userData.name} />
                                <span>{userData.name}</span>
                            </div>
                        </div>
                        <div className="bottom">
                            {singlePostData.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className="title">General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src={UtilitiesIcon} alt="Utilities icon" />
                            <div className="featureText">
                                <span>Utilities</span>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src={PetIcon} alt="Pet icon" />
                            <div className="featureText">
                                <span>Pet Policy</span>
                                <p>Pets Allowed</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src={FeesIcon} alt="Fees icon" />
                            <div className="featureText">
                                <span>Property Fees</span>
                                <p>Must have 3x the rent in total household income</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Room Sizes</p>
                    <div className="sizes">
                        <div className="size">
                            <img src={SizeIcon} alt="Size icon" />
                            <span>80 sqft</span>
                        </div>
                        <div className="size">
                            <img src={BedIcon} alt="Bed icon" />
                            <span>2 beds</span>
                        </div>
                        <div className="size">
                            <img src={BathIcon} alt="Bath icon" />
                            <span>1 bathroom</span>
                        </div>
                    </div>
                    <p className="title">Nearby Places</p>
                    <div className="listHorizontal">
                        <div className="feature">
                            <img src={SchoolIcon} alt="School icon" />
                            <div className="featureText">
                                <span>School</span>
                                <p>250m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src={BusIcon} alt="Bus icon" />
                            <div className="featureText">
                                <span>Bus Stop</span>
                                <p>100m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src={RestaurantIcon} alt="Restaurant icon" />
                            <div className="featureText">
                                <span>Restaurant</span>
                                <p>200m away</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={[singlePostData]} />
                    </div>
                    <div className="buttons">
                        <button>
                            <img src={ChatIcon} alt="Message icon" />
                            Send a Message
                        </button>
                        <button>
                            <img src={SaveIcon} alt="Save icon" />
                            Save the Place
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}