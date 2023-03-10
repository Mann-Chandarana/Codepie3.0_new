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
                    <h5 class="mb-0">{name}</h5>
                    <p class="small text-muted">
                        {roles.map((role, k) => {
                            return (
                                <>
                                    {role}
                                    <br />
                                </>
                            );
                        })}
                    </p>
                    <ul class="social mb-0 list-inline mt-3">
                        <li class="list-inline-item m-0">
                            <a href="#" class="social-link">
                                <i class="fa fa-facebook-f"></i>
                            </a>
                        </li>
                        <li class="list-inline-item m-0">
                            <a href="#" class="social-link">
                                <i class="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li class="list-inline-item m-0">
                            <a href="#" class="social-link">
                                <i class="fa fa-instagram"></i>
                            </a>
                        </li>
                        <li class="list-inline-item m-0">
                            <a href="#" class="social-link">
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card;
