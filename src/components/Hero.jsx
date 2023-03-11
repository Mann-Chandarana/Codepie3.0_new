import React from 'react'

export const Hero = () => {
    return (
        <section style={{marginTop:"-60px"}} id="hero" className="d-flex align-items-center">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>A Competitive Programming Contest</h1>
                        <ul>
                            <li><i className="ri-check-line"></i> <span style={{fontWeight:"bold"}}>Date:</span> Saturday, March 25 2023</li>
                            <li><i className="ri-check-line"></i><span style={{fontWeight:"bold"}}> Time:</span> 10 AM to 1 PM</li>
                            <li><i className="ri-check-line"></i><span style={{fontWeight:"bold"}}>Registration deadline:</span> March 18 2023, 11:59 PM</li>
                            <li><i className="ri-check-line"></i> <span style={{fontWeight:"bold"}}>Venue:</span> CSPIT and Depstar Labs, Charusat</li>
                        </ul>
                        <div className="mt-3">
                            <a style={{backgroundColor:"#4937a6",textDecoration:"none",border:"none",padding:"12px 30px"}} href="#Register" className="btn-get-started scrollto">Click here to Register</a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img">
                        <img src="assets/images/Photo-1.jpg" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}
