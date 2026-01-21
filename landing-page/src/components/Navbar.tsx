import React, { useState, useEffect } from 'react';
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
                <a href="/" className="navbar-logo">
                    <span>NexusFlow</span>
                </a>

                <ul className="navbar-nav">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#solutions">Solutions</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#demo" className="navbar-cta">Start Free Trial</a></li>
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
                    <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
                    <a href="#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
                    <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                    <a href="#demo" className="navbar-cta" onClick={() => setMobileMenuOpen(false)}>
                        Start Free Trial
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
