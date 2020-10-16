import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import grad_cap from "../Images/grad_cap.jpg"
import smogathon from "../Images/smogathon.jpg"
import nvidia_certificate from "../Images/Nvidia.PNG"
import agh_logo from "../Images/agh.png"

export default class AboutMeCarouselComponent extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={50}
                naturalSlideHeight={20}
                totalSlides={4}
            >
                <Slider>
                    <Slide index={0}>
                        <h1>EDUCATION</h1>
                        <text>
                            <img src={agh_logo} className="agh-logo" />
                            <p>I Graduated from AGH University of Science and Technology with Master of Science - Smart Grids
                            Technology Platform, my master thesis was named: Using Microcontroller for Phasor computation.
                            Finalist of the competition for the best master's thesis organized by TAURON Dystrybucja</p>
                        </text>

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
                        <h1>Awards and Certificates</h1>
                        <p>First prize in Transportation Emission Management category</p>
                        <p>Smogathon 08/12/2019 Idea of improving the provision of information on planned street cleaning and secondary emissions</p>
                        <img src={smogathon} height={250}/>
                    </Slide>
                    <Slide index={3}>
                        <h1>Awards and Certificates</h1>
                        <p>Nvidia certificate</p>
                        <img src={nvidia_certificate} height={250} />

                    </Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        );
    }
}