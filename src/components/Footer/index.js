import React from 'react';
import './index.css';
import instagram from '../../assets/instagram.png';

const Navbar = () => {
    return (
        <footer>
            <a href="https://www.instagram.com/eugeniabakinglab/?hl=es" target="_blank"><img class="boton_insta"
                src={instagram} alt="Instagram logo" /></a>
        </footer>
    )
}

export default Navbar;