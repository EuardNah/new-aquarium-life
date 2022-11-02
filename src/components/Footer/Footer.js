import React from 'react';
import './Footer.css'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer-container' >
            <a href="https://web.facebook.com/Aquarium-LIFE-829576683862680/" target="_blank" rel='noreferrer' ><FaFacebook className='footer-icon' /></a>
            <a href="https://twitter.com/Eduard64857300" target="_blank" rel='noreferrer'><FaTwitter className='footer-icon' /></a>
            <a href="https://www.instagram.com/discusfish555/" target="_blank" rel='noreferrer'><FaInstagram className='footer-icon' /></a>
            <a href="https://www.youtube.com/channel/UCfmbz-F_5e016_0jq21unzA" target="_blank" rel='noreferrer'><FaYoutube className='footer-icon' /></a>
        </div>
    );
};

export default Footer;