import React from 'react'

export const Navbar = () => {
    return (
        <header style={{backgroundColor:"#4937a6",paddingBottom:"12px"}} id="header" className="fixed-top">
            <div style={{padding: "5px 0"}} className="container d-flex align-items-center justify-content-between">

                <h1 className="navbar-brand"><a style={{textDecoration:"none",color:"white"}} href="index.html">CODE<span style={{color:"orange"}}>PIE</span> 3.0</a></h1>
                <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a style={{color:"white",fontSize:"17px"}} className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a style={{color:"white",fontSize:"17px"}} className="nav-link scrollto active" href="#Services">Services</a></li>
                        <li><a style={{color:"white",fontSize:"17px"}} className="nav-link scrollto" href="#Rules">Rules</a></li>
                        <li><a style={{color:"white",fontSize:"17px"}} className="nav-link scrollto" href="#pricing">Prices</a></li>
                        <li><a style={{color:"white",fontSize:"17px"}} className="nav-link scrollto " href="#Gallery">Gallery</a></li>
                        <li><a style={{color:"white",fontSize:"17px"}} className="nav-link scrollto" href="#team">Team</a></li>
                        <li><a style={{color:"white",fontSize:"17px"}} className="nav-link scrollto" href="#Register">Register</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    )
}
