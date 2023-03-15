import React from 'react';
import Prices from './Sub-componets/Prices'

export const Pricing = () => {
    return (
        <section id="pricing" className="pricing">
            <div className="container">
                <div className="section-title">
                    <h2>Winners take these home!!</h2>
                </div>
                <div>
                    <Prices />
                </div>
            </div>
        </section>
    );
};
