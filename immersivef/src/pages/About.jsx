import React from 'react'
import AboutHero from '../components/AboutHero';
import MissionState from '../components/MissionState';
import Carousel from '../components/Carousel';
import Faq from '../components/Faq';


export const About = () => {
  return (
    <div>
        <AboutHero />

        <MissionState />
        <Faq />
    </div>
  )
}
export default About;