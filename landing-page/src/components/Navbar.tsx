import React, { useState, useEffect } from 'react';
import { Link } from 'rasengan';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span>NexusFlow</span>
                </Link>

                <ul className="navbar-nav">
                    <li><Link to="#features">Features</Link></li>
                    <li><Link to="#solutions">Solutions</Link></li>
                    <li><Link to="#pricing">Pricing</Link></li>
                    <li><Link to="#contact">Contact</Link></li>
                    <li><Link to="#demo" className="navbar-cta">Start Free Trial</Link></li>
                </ul>

                <button
                    className="navbar-mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="navbar-mobile-menu">
                    <Link to="#features" onClick={() => setMobileMenuOpen(false)}>Features</Link>
                    <Link to="#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
                    <Link to="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                    <Link to="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    <Link to="#demo" className="navbar-cta" onClick={() => setMobileMenuOpen(false)}>
                        Start Free Trial
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
