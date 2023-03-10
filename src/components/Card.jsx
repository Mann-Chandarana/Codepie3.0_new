import React from 'react';

function Card({ name, image, roles }) {
    return (
        <div className="member mx-3 border-5">
            <div className="member-img">
                <img
                    src={image}
                    alt=""
                    height={400}
                    className="w-100"
                    style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
                />
                <div className="social">
                    <a href="#">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="member-info">
                <h4>{name}</h4>
                <p className="text-muted">{roles.join(', ')}</p>
            </div>
        </div>
    );
}

export default Card;
