import React from 'react';
import './footer.css'
import {Link} from "react-router-dom";

const Footer = () => {

    return (
        <div className="footer">
            <div className="navlinks">
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><a href="">Team</a></li>
                    <li><a href="https://github.com/MinecraftModDevelopmentMods/">GitHub</a></li>
                    <li><a href="https://twitter.com/MCModDev">Twitter</a></li>
                    <li><a href="https://discordapp.com/invite/EDbExcX">Discord</a></li>
                    <li><a href="https://ci.mcmoddev.com/">Jenkins</a></li>
                    <li><a href="https://maven.mcmoddev.com/">Maven</a></li>
                </ul>
            </div>

            <div className="nodecraft-sponsorship">
                <a href="https://nodecraft.com/r/mmd">
                    <img src="https://nodecraft.com/assets/images/logo.png" width="20%" height="20%" alt="Nodecraft" title="Use code MMD to save 30% off your first month!"/>
                </a>
            </div>

            <div className="copyright">
                Minecraft Mod Development © 2016 - {new Date().getFullYear()}
            </div>
        </div>
    );
};


export default Footer;