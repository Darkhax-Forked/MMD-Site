import React from 'react';
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

    return (
        <div className="upper-navigation">
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><a href="todo">Team</a></li>
                <li><a href="https://github.com/MinecraftModDevelopmentMods/">GitHub</a></li>
                <li><a href="https://twitter.com/MCModDev">Twitter</a></li>
                <li><a href="https://discordapp.com/invite/EDbExcX">Discord</a></li>
                <li><a href="https://ci.mcmoddev.com/">Jenkins</a></li>
                <li><a href="https://maven.mcmoddev.com/">Maven</a></li>
            </ul>
        </div>
    );
};

export default Navbar;