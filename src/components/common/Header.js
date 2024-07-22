
import React from 'react';

/**
 * Header component for displaying the navigation bar with the AllicaBank logo.
 * @returns {JSX.Element} Header component JSX.
 */
const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                 <a href="/characters" className="navbar-brand">
                    <img 
                        src="https://www.allica.bank/hubfs/ALB/Global/Logos/AllicaBank.svg" 
                        loading="eager" 
                        alt="AllicaBank" 
                        width="200" 
                        height="20" 
                    />
                </a>
            </nav>
        </header>
    );
}
export default Header;