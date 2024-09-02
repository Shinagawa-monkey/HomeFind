import './Footer.scss';
import HeartIcon from '../../assets/heart.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-content">
                <span className="footer-text">
                    Made with <img src={HeartIcon} alt="Heart icon" className="heart-icon" /> by Elena Shatalova
                </span>
                <span className="footer-year">{currentYear}</span>
            </div>
        </footer>
    );
};

export default Footer;
