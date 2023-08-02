import { Link } from 'react-router-dom';
import './header.css';
import { useState } from 'react';
import { SectionMenu } from './sectionMenu/sectionMenu';
import { menuRoutes } from '../../constants/menuRoutes/menuRoutes';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    return (
        <header className="container-header">
            <div className="header-bar">
                <img
                    className={`bar-icon-menu ${
                        isOpen ? 'open-menu' : 'close-menu'
                    }`}
                    src="../../../../assets/menu-burguer.svg"
                    alt="menu"
                    width="30px"
                    onClick={handleClick}
                />
                <img
                    src="../../../../assets/icon-close.svg"
                    alt="cerrar"
                    width="25px"
                    className={`bar-icon-close ${isOpen && 'iconClose'}`}
                    onClick={handleClick}
                />
                <Link to={'./'}>
                    <img
                        src="../../../../assets/logo-andry-gota.svg"
                        alt="Andry Morales logo"
                        width="40px"
                    />
                </Link>
            </div>
            <div className={`container-menu ${isOpen ? 'open' : 'close'}`}>
                {isOpen && (
                    <SectionMenu sections={menuRoutes} setIsOpen={setIsOpen} />
                )}
            </div>
        </header>
    );
};
