import React, { useState } from 'react';
import { HiRefresh } from 'react-icons/hi';
import hackerImage from '@/assets/images/man-wear-white-mask-look-like-hacker-and-point-to-2026-01-08-07-28-43-utc.jpg';
import womanImage from '@/assets/images/woman-programmer-is-working-in-her-computer-room-2026-01-07-00-12-38-utc.jpg';

interface HeroSection2Props {
    onSwitch: () => void;
}

const HeroSection2: React.FC<HeroSection2Props> = ({ onSwitch }) => {
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
        <section
            className="hero-section"
            onMouseMove={handleMouseMove}
            style={{
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000'
            }}
        >
            {/* === DYNAMIC DUAL BACKGROUND (TriAxis Style) === */}

            {/* Layer 1: Woman Programmer (Slow Zoom & Pan) */}
            <div
                className="triaxis-bg-anim"
                style={{
                    backgroundImage: `url(${womanImage})`,
                    opacity: 0.6,
                    animationDuration: '25s',
                    mixBlendMode: 'screen',
                    position: 'absolute',
                    top: '-5%',
                    left: '-5%',
                    width: '110%',
                    height: '110%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    pointerEvents: 'none'
                }}
            />

            {/* Layer 2: Hacker (Opposite move + Mouse Parallax) */}
            <div
                className="triaxis-bg-anim"
                style={{
                    backgroundImage: `url(${hackerImage})`,
                    opacity: 0.5,
                    animationDirection: 'alternate-reverse',
                    animationDuration: '20s',
                    mixBlendMode: 'lighten', // Fusion des images
                    transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`,
                    position: 'absolute',
                    top: '-5%',
                    left: '-5%',
                    width: '110%',
                    height: '110%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    pointerEvents: 'none'
                }}
            />

            {/* Dark Overlay for Text Readability */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, rgba(10, 10, 20, 0.4) 0%, rgba(0, 0, 0, 0.95) 100%)',
                    zIndex: 1
                }}
            />

            {/* Floating Elements (Cyber Particles) */}
            <div className="floating-element floating-1" style={{ width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)', transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`, zIndex: 2 }}></div>
            <div className="floating-element floating-2" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)', transform: `translate(${mousePos.x * -60}px, ${mousePos.y * -60}px)`, zIndex: 2 }}></div>

            {/* === MAIN CONTENT (TriAxis Animated) === */}
            <div className="hero-container" style={{ textAlign: 'center', flexDirection: 'column', position: 'relative', zIndex: 10 }}>

                <div className="triaxis-text-3d" style={{ marginBottom: '2rem' }}>
                    <h1 className="hero-title" style={{ fontSize: '4rem', lineHeight: 1.1 }}>
                        Transform Your Workflow with<br />
                        <span className="hero-title-highlight" style={{
                            background: 'linear-gradient(to right, #4f46e5, #ec4899)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Next-Gen Collaboration
                        </span>
                    </h1>
                </div>

                <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.25rem', opacity: 0.9 }}>
                    Experience the next evolution of digital workspace. Architect availability, secure your data, and deploy continuously with our edge-native platform.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button className="hero-btn hero-btn-primary" onClick={onSwitch}>
                        Get Started Now
                    </button>
                </div>

            </div>

            <button className="switch-view-btn" onClick={onSwitch}>
                <HiRefresh size={20} />
                <span>Switch Back</span>
            </button>

        </section>
    );
};

export default HeroSection2;
