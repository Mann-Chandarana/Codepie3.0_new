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
                        image="/assets/images/team/Vatsal.jpg"
                        roles={['Platform Team', 'Web Team']}
                    />
                    <Card name="Meet Butani" image="/assets/images/team/Meet.jpg" roles={['...']} />
                    <Card name="Mann Chanadarana" image="/assets/images/team/Mann.jpg" roles={['...']} />
                    <Card name="Ditsa Mandani" image="/assets/images/team/Ditsa.jpg" roles={['...']} />
                    <Card name="Shyamal Jhosi" image="/assets/images/team/Shyamal.jpg" roles={['...']} />
                    <Card name="Mandar Sanghavi" image="/assets/images/team/Mandar.jpg" roles={['...']} />
                    <Card name="Ish Thumber" image="/assets/images/team/Ish.jpg" roles={['...']} />
                    <Card name="Neel Thomas" image="/assets/images/team/Neel.jpg" roles={['...']} />
                    <Card name="Jekeel Shah" image="/assets/images/team/Jekeel.png" roles={['...']} />
                    <Card name="Dev Halvawala" image="/assets/images/team/Dev.jpeg" roles={['...']} />
                    <Card name="Aneri" image="/assets/images/team/Aneri.jpg" roles={['...']} />
                    <Card name="Nidhi Batra" image="/assets/images/team/Nidhi.jpg" roles={['...']} />
                    <Card name="Devansh" image="/assets/images/team/Devansh.jpg" roles={['...']} />
                    <Card name="Shruti Paghadal" image="/assets/images/team/Shruti.jpg" roles={['...']} />
                    <Card name="Viraj Patoliya" image="/assets/images/team/Viraj.jpg" roles={['...']} />
                    <Card name="Kartik Patel" image="/assets/images/team/Kartik.jpg" roles={['...']} />
                    <Card name="Hemil Kevadiya" image="/assets/images/team/Hemil.jpg" roles={['...']} />
                    <Card name="Sagar Bhanushali" image="/assets/images/team/Sagar.jpg" roles={['...']} />
                    <Card name="Jeet Vansjaliya" image="/assets/images/team/Jeet.jpg" roles={['...']} />
                    <Card name="Krish Vachhani" image="/assets/images/team/Krish.jpg" roles={['...']} />
                    <Card name="Jay Sudani" image="/assets/images/team/Jay.jpg" roles={['...']} />
                    <Card name="Viraj Vasani" image="/assets/images/team/Viraj2.jpg" roles={['...']} />
                    <Card name="Pinak Thakar" image="/assets/images/team/Pinak.png" roles={['...']} />
                </Slider>
            </div>
        </section>
    );
};
