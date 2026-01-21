import React, { useState } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { HiRefresh } from 'react-icons/hi';
import heroImage from '@/assets/images/hero-3d.jpg';
import cyberpunkVideo from '@/assets/images/cyberpunk-touch-screen-animation-2025-12-09-04-44-01-utc.mov';

interface HeroSectionProps {
    onSwitch: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSwitch }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const x = (clientX - centerX) / centerX;
        const y = (clientY - centerY) / centerY;

        setMousePos({ x, y });
    };

    return (
        <section className="hero-section" onMouseMove={handleMouseMove} style={{ backgroundColor: '#000000', overflow: 'hidden' }}>
            <div
                className="triaxis-bg-anim"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    position: 'absolute',
                    top: '-10%', left: '-10%', width: '120%', height: '120%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.25,
                    filter: 'grayscale(100%) contrast(1.2) brightness(0.5)',
                    transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />
            <div className="floating-element floating-1" style={{ background: 'radial-gradient(circle, rgba(60,60,100,0.2) 0%, transparent 70%)', transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}></div>

            <div className="hero-container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="hero-content-left">
                    <div className="triaxis-text-3d">
                        <h1 className="hero-title">
                            Transform Your Workflow with{' '}
                            <span className="hero-title-highlight">Next-Gen Collaboration</span>
                        </h1>
                    </div>

                    <p className="hero-subtitle">
                        Streamline your team's productivity with powerful tools designed for modern businesses.
                        Get started in minutes, scale effortlessly, and achieve more together.
                    </p>

                    <div className="hero-features-list">
                        <div className="hero-feature-item">
                            <IoCheckmarkCircle className="feature-icon" />
                            <span>Real-time collaboration</span>
                        </div>
                        <div className="hero-feature-item">
                            <IoCheckmarkCircle className="feature-icon" />
                            <span>Advanced analytics</span>
                        </div>
                        <div className="hero-feature-item">
                            <IoCheckmarkCircle className="feature-icon" />
                            <span>Enterprise-grade security</span>
                        </div>
                    </div>
                </div>

                <div className="hero-content-right">
                    <div className="hero-image-container">
                        <div className="hero-card-inner">
                            <div className="hero-card-front">
                                <img
                                    src={heroImage}
                                    alt="3D Abstract Art"
                                    className="hero-main-image"
                                />
                            </div>
                            <div className="hero-card-back" style={{ padding: 0, overflow: 'hidden' }}>
                                <video
                                    src={cyberpunkVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="switch-view-btn" onClick={onSwitch}>
                <HiRefresh size={20} />
                <span>Switch View</span>
            </button>
        </section>
    );
};

export default HeroSection;
