import React, { useState } from 'react';

export const Navbar = () => {
    const [toogle, setToggle] = useState(false);

    return (
        <header style={{ backgroundColor: '#4937a6' }} id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 style={{ marginBottom: '-5px' }} className="navbar-brand">
                    <a style={{ textDecoration: 'none', color: 'white' }} href="index.html">
                        <img className="codepie-img" src="assets/images/logo/1.png" alt="" /> CODE
                        <span style={{ color: 'orange' }}>PIE</span> 3.0
                    </a>
                </h1>

                <nav
                    id="navbar"
                    className={`navbar ${toogle ? 'navbar-mobile' : ''} `}
                    onClick={() => {
                        if (toogle) {
                            setToggle(false);
                        }
                    }}
                >
                    <ul>
                        <li>
                            <a
                                style={{ color: 'white', fontSize: '17px' }}
                                className="nav-link scrollto active"
                                href="#hero"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ color: 'white', fontSize: '17px' }}
                                className="nav-link scrollto active"
                                href="#Services"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a style={{ color: 'white', fontSize: '17px' }} className="nav-link scrollto" href="#Rules">
                                Rules
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ color: 'white', fontSize: '17px' }}
                                className="nav-link scrollto"
                                href="#pricing"
                            >
                                Prices
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ color: 'white', fontSize: '17px' }}
                                className="nav-link scrollto "
                                href="#Gallery"
                            >
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a style={{ color: 'white', fontSize: '17px' }} className="nav-link scrollto" href="#team">
                                Team
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ color: 'white', fontSize: '17px' }}
                                className="nav-link scrollto"
                                href="#Register"
                            >
                                Register
                            </a>
                        </li>
                    </ul>
                    <i
                        className={`bi mobile-nav-toggle ${toogle ? 'bi-x' : 'bi-list'}`}
                        onClick={() => setToggle((prev) => !prev)}
                    ></i>
                </nav>
            </div>
        </header>
    );
};
