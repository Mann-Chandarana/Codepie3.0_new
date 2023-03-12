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
                    <Card name="Vatsal Ghoghari" image="/assets/images/team/Vatsal.webp" role="..." />
                    <Card name="Meet Butani" image="/assets/images/team/Meet.webp" role="..." />
                    <Card name="Mann Chanadarana" image="/assets/images/team/Mann.webp" role="..." />
                    <Card name="Ditsa Mandani" image="/assets/images/team/Ditsa.webp" role="..." />
                    <Card name="Shyamal Jhosi" image="/assets/images/team/Shyamal.webp" role="..." />
                    <Card name="Mandar Sanghavi" image="/assets/images/team/Mandar.webp" role="..." />
                    <Card name="Ish Thumber" image="/assets/images/team/Ish.webp" role="..." />
                    <Card name="Neel Thomas" image="/assets/images/team/Neel.webp" role="..." />
                    <Card name="Jekeel Shah" image="/assets/images/team/jekeel.webp" role="..." />
                    <Card name="Dev Halvawala" image="/assets/images/team/Dev.webp" role="..." />
                    <Card name="Aneri" image="/assets/images/team/Aneri.webp" role="..." />
                    <Card name="Nidhi Batra" image="/assets/images/team/Nidhi.webp" role="..." />
                    <Card name="Devansh" image="/assets/images/team/Devansh.webp" role="..." />
                    <Card name="Shruti Paghadal" image="/assets/images/team/Shruti.webp" role="..." />
                    <Card name="Viraj Patoliya" image="/assets/images/team/Viraj.webp" role="..." />
                    <Card name="Kartik Patel" image="/assets/images/team/Kartik.webp" role="..." />
                    <Card name="Hemil Kevadiya" image="/assets/images/team/Hemil.webp" role="..." />
                    <Card name="Sagar Bhanushali" image="/assets/images/team/Sagar.webp" role="..." />
                    <Card name="Jeet Vansjaliya" image="/assets/images/team/Jeet.webp" role="..." />
                    <Card name="Krish Vachhani" image="/assets/images/team/Krish.webp" role="..." />
                    <Card name="Jay Sudani" image="/assets/images/team/Jay.webp" role="..." />
                    <Card name="Viraj Vasani" image="/assets/images/team/Viraj2.webp" role="..." />
                    <Card name="Pinak Thakar" image="/assets/images/team/Pinak.webp" role="..." />
                </Slider>
            </div>
        </section>
    );
};
