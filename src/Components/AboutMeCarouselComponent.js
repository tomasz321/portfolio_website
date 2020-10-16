import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import smogathon from "../Images/smogathon.jpg"
import nvidia_certificate from "../Images/Nvidia.PNG"
import agh_logo from "../Images/agh.png"

export default class AboutMeCarouselComponent extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={50}
                naturalSlideHeight={30}
                totalSlides={4}
            >
                <div className="carousel-div">
                    <Slider>
                        <Slide index={0}>
                            <h1>EDUCATION</h1>
                            <img src={agh_logo} className="pictures-in-carousel" alt="AGH logo"/>
                            <p>I Graduated from AGH University of Science and Technology with Master of Science - Smart Grids
                            Technology Platform, my master thesis was named: Using Microcontroller for Phasor computation.
                            Finalist of the competition for the best master's thesis organized by TAURON Dystrybucja</p>

                        </Slide>

                        <Slide index={1}>
                            <h1>Professional Experience</h1>
                            <p>03.2020 - present FME Specialist - Jeppsen, a Boeing company</p>
                            <p>FME specialist mainly working on automating the data transformation pipeline and focusing on improving the quality of the software.</p>
                            <p>Stack: FME, Python, Docker, Jenkins.</p>
                            <p>11.2019 - 02.2020 Back-end Developer - Diet-AI</p>
                            <p>Back-end developer and data science engineer responsible for implementing a database and knowledge-based recommendation system for smart dietary assistant.</p>
                            <p>Stack: Python, SQL</p>
                            <p>08.2019 - 02.2020 Product Owner - Aptiv</p>
                            <p>05.2019 - 08.2019 Data Science Engineer - Aptiv</p>
                            <p>03.2019 - 05.2019 Junior Data Science Engineer - Aptiv</p>
                            <p>01.2019 - 03.2019 Data analyst intern - Aptiv </p>
                        </Slide>

                        <Slide index={2}>
                            <h1>Awards</h1>
                            <p>First prize in Transportation Emission Management category</p>
                            <p>Smogathon 08/12/2019 Idea of improving the provision of information on planned street cleaning and secondary emissions</p>
                            <img src={smogathon} height={250} className="pictures-in-carousel" alt="From 2019 Smogathon"/>
                        </Slide>
                        <Slide index={3}>
                            <h1>Certificates</h1>
                            <p>Nvidia certificate</p>
                            <img src={nvidia_certificate} height={250} className="pictures-in-carousel" alt="NVIDIA certificate" />

                        </Slide>
                    </Slider>
                    <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext>
                </div>
            </CarouselProvider>
        );
    }
}