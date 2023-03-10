import React from 'react';
import Slider from 'react-slick';
import '../Carosuel.css';
import Card from './Card';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

export const Teams = () => {
    return (
        <section id="team" className="team section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Codepie Team</h2>
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                        sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                        ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>

                <Slider {...settings}>
                    <Card name="Vatsal Ghoghari" image="/assets/img/team/Vatsal.jpeg" roles={['Head', 'Platform']} />
                    <Card name="Mann Chandarana" image="/assets/img/team/Mann.jpeg" roles={['Head']} />
                    <Card name="Jekeel Shah" image="/assets/img/team/Jekeel.png" roles={['Head']} />
                    <Card name="Mandar Sanghavi" image="/assets/img/team/Mandar.jpeg" roles={['Head']} />
                    <Card name="Meet Butnai" image="/assets/img/team/Meet.jpg" roles={['Head']} />
                </Slider>
            </div>
        </section>
    );
};
