import React from 'react'

export const Navbar = () => {
    return (
        <header style={{backgroundColor:"#4937a6",paddingBottom:"12px"}} id="header" className="fixed-top ">
            <div className="container d-flex align-items-center justify-content-between">

                <h1 className="navbar-brand"><a style={{textDecoration:"none",color:"white"}} href="index.html">Code<span style={{color:"orange"}}>pie</span> 3.0</a></h1>
                <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a style={{color:"white",fontSize:"17px"}} className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a style={{color:"white",fontSize:"17px"}} className="nav-link scrollto" href="#about">Rules</a></li>
                        <li><a style={{color:"white",fontSize:"17px"}} className="nav-link scrollto" href="#pricing">Prices</a></li>
                        <li><a style={{color:"white",fontSize:"17px"}} className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                        <li><a style={{color:"white",fontSize:"17px"}} className="nav-link scrollto" href="#team">Team</a></li>
                        <li><a style={{color:"white",fontSize:"17px"}} className="nav-link scrollto" href="#Register">Register</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    )
}
