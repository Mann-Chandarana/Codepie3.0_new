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
                    <Card
                        name="Vatsal Ghoghari"
                        image="/assets/images/team/Vatsal.webp"
                        roles={['Platform Team', 'Web Team']}
                    />
                    <Card name="Meet Butani" image="/assets/images/team/Meet.webp" roles={['...']} />
                    <Card name="Mann Chanadarana" image="/assets/images/team/Mann.webp" roles={['...']} />
                    <Card name="Ditsa Mandani" image="/assets/images/team/Ditsa.webp" roles={['...']} />
                    <Card name="Shyamal Jhosi" image="/assets/images/team/Shyamal.webp" roles={['...']} />
                    <Card name="Mandar Sanghavi" image="/assets/images/team/Mandar.webp" roles={['...']} />
                    <Card name="Ish Thumber" image="/assets/images/team/Ish.webp" roles={['...']} />
                    <Card name="Neel Thomas" image="/assets/images/team/Neel.webp" roles={['...']} />
                    <Card name="Jekeel Shah" image="/assets/images/team/jekeel.webp" roles={['...']} />
                    <Card name="Dev Halvawala" image="/assets/images/team/Dev.webp" roles={['...']} />
                    <Card name="Aneri" image="/assets/images/team/Aneri.webp" roles={['...']} />
                    <Card name="Nidhi Batra" image="/assets/images/team/Nidhi.webp" roles={['...']} />
                    <Card name="Devansh" image="/assets/images/team/Devansh.webp" roles={['...']} />
                    <Card name="Shruti Paghadal" image="/assets/images/team/Shruti.webp" roles={['...']} />
                    <Card name="Viraj Patoliya" image="/assets/images/team/Viraj.webp" roles={['...']} />
                    <Card name="Kartik Patel" image="/assets/images/team/Kartik.webp" roles={['...']} />
                    <Card name="Hemil Kevadiya" image="/assets/images/team/Hemil.webp" roles={['...']} />
                    <Card name="Sagar Bhanushali" image="/assets/images/team/Sagar.webp" roles={['...']} />
                    <Card name="Jeet Vansjaliya" image="/assets/images/team/Jeet.webp" roles={['...']} />
                    <Card name="Krish Vachhani" image="/assets/images/team/Krish.webp" roles={['...']} />
                    <Card name="Jay Sudani" image="/assets/images/team/Jay.webp" roles={['...']} />
                    <Card name="Viraj Vasani" image="/assets/images/team/Viraj2.webp" roles={['...']} />
                    <Card name="Pinak Thakar" image="/assets/images/team/Pinak.webp" roles={['...']} />
                </Slider>
            </div>
        </section>
    );
};
