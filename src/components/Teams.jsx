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
    pauseOnHover: true,
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
                    <Card name="Vatsal Ghoghari" image="/assets/images/team/Vatsal.jpg" roles={['...']} />
                    <Card name="Meet Butani" image="/assets/images/team/Meet.jpg" roles={['...']} />
                    <Card name="Mann Chanadarana" image="/assets/images/team/Mann.jpg" roles={['...']} />
                    <Card name="Ditsa Mandani" image="/assets/images/team/Ditsa.jpg" roles={['...']} />
                    <Card name="Shyamal Jhosi" image="/assets/images/team/Shyamal.jpg" roles={['...']} />
                    <Card name="Mandar Sanghavi" image="/assets/images/team/Mandar.jpg" roles={['...']} />
                    <Card name="Ish Thumber" image="/assets/images/team/Ish.jpg" roles={['...']} />
                    <Card name="Neel Thomas" image="/assets/images/team/Neel.jpg" roles={['...']} />
                    <Card name="Jekeel Shah" image="/assets/images/team/Jekeel.png" roles={['...']} />
                    <Card name="Aneri" image="/assets/images/team/Aneri.jpg" roles={['...']} />
                    <Card name="Nidhi" image="/assets/images/team/Nidhi.jpg" roles={['...']} />
                    <Card name="Devansh" image="/assets/images/team/Devansh.jpg" roles={['...']} />
                </Slider>
            </div>
        </section>
    );
};
