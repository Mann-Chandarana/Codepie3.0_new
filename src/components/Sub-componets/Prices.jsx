import React from 'react';

const Prices = () => {
    return (
        <div className="row no-gutters">
            <div className="col-lg-4 box">
                <h3>Runner-up Team</h3>
                <div className="card-body">
                    <h2 className="pricing-text">
                        <img className="pricing-img watch sf " src="/assets/images/prizes/1.jpg" alt="" />
                    </h2>
                    <br />
                    <br />
                    <p className="p-desc">Godlike TWS Earphones</p>
                </div>
            </div>

            <div className="col-lg-4 box featured">
                <h3>Winner</h3>
                <div className="card-body">
                    <h2 className="pricing-text">
                        <img className="pricing-img watch sf" src="/assets/images/prizes/2.jpg" alt="" />
                    </h2>
                    <br />
                    <br />
                    <br />
                    <p className="p-desc"> Noise Icon Buzz BT Calling </p>

                    {/* <button type="button" className="btn btn-lg btn-outline-dark btn-block ">Sign Up</button> */}
                </div>
            </div>

            <div className="col-lg-4 box">
                <h3>2nd Runner-up</h3>
                <div className="card-body">
                    <h2 className="pricing-text ">
                        <img className="pricing-img watch sf img-third" src="/assets/images/prizes/3.jpg" alt="" />
                    </h2>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="p-desc"> Infinity Bluetooth Speaker</p>
                    {/* <button type="button" className="btn btn-lg btn-dark btn-block">Sign Up</button> */}
                </div>
            </div>
        </div>
    );
};

export default Prices
