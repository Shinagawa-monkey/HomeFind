import { useState } from "react";
// import { useState, useMemo } from "react";
import ArrowIcon from "../../assets/arrow.png";
import "./Slider.scss";

export default function Slider({ images, title }) {
    const [imageIndex, setImageIndex] = useState(null);

    // Memoize small images outside of any conditional logic
    // const renderedSmallImages = useMemo(() =>
    //     images.slice(1).map((image, index) => (
    //         <img
    //             src={image}
    //             key={index}
    //             alt={`${title} ${index + 2}`}
    //             onClick={() => openSlider(index + 1)}
    //         />
    //     )), [images, title]);

    // Early return if no images are provided
    if (!images.length) return null;

    // function handleSliderArrow(direction) {
    // if (direction === "left") {
    //     if (imageIndex === 0) {
    //         setImageIndex(images.length - 1)
    //     } else {
    //         setImageIndex(imageIndex - 1)
    //     }
    // } else {
    //     if (imageIndex === images.length - 1) {
    //         setImageIndex(0)
    //     } else {
    //         setImageIndex(imageIndex + 1)
    //     }
    // }

    const handleSliderArrow = (direction) => {
        setImageIndex((prevIndex) => {
            if (direction === "left") {
                return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
            } else {
                return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
            }
        });
    }

    const openSlider = (index) => setImageIndex(index);

    const closeSlider = () => setImageIndex(null);

    return (
        <div className="slider">
            {imageIndex !== null && (
                <div className="fullSlider">
                    <div className="arrow" onClick={() => handleSliderArrow("left")}>
                        <img src={ArrowIcon} alt="Left arrow" />
                    </div>
                    <div className="imageContainer">
                        <img src={images[imageIndex]} alt={`${title} ${imageIndex + 1}`} />
                    </div>
                    <div className="arrow" onClick={() => handleSliderArrow("right")}>
                        <img src={ArrowIcon} alt="Right arrow" className="arrowRight" />
                    </div>
                    {/* <div className="closeBtn" onClick={() => setImageIndex(null)}> */}
                    <div className="closeBtn" onClick={closeSlider}>
                        X
                    </div>
                </div>
            )}
            <div className="bigImage">
                <img
                    src={images[0]}
                    alt={title}
                    // onClick={() => setImageIndex(0)}
                    onClick={() => openSlider(0)}
                />
            </div>
            <div className="smallImages">
                {images.slice(1).map((image, index) => (
                    <img
                        src={image}
                        key={index}
                        alt={title}
                        onClick={() => setImageIndex(index + 1)}
                    />))}
                {/* {renderedSmallImages} */}
            </div>
        </div>
    )
}