import React from 'react';

function Card({ name, image, roles }) {
    return (
        <div class="card shadow-sm border-0 rounded" style={{ height: 550 }}>
            <div class="card-body p-0">
                <img
                    src={image}
                    alt="person"
                    class="w-100 card-img-top"
                    height={400}
                    style={{ objectFit: 'cover', objectPosition: '50% 40%' }}
                />
                <div class="p-4">
                    <div className="member-info" style={{ textAlign: 'center' }}>
                        <h4>{name}</h4>
                        <span>Student</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
