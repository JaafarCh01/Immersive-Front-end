import React from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';

export const CoursesCatalogue = () => {
  const courses = [
    {
      title: 'PC Architecture',
      description:
        'Dive into the internal architecture of personal computers. Learn to identify key components and understand their functions through AR visualizations.',
      image: 'https://as1.ftcdn.net/v2/jpg/06/69/40/52/1000_F_669405248_bH5WPZiAFElWP06vqlPvj2qWcShUR4o8.jpg',
    },
    {
      title: 'Car Engines',
      description:
        'Discover the inner workings of car engines. This course uses VR to visually explain each part of the engine and how they work together to power a vehicle.',
      image: 'https://as2.ftcdn.net/v2/jpg/05/61/83/21/1000_F_561832197_hFNpE81YcD1DWkekEGgr7UmyAdhF7yor.jpg',
    },
    {
      title: 'Human Anatomy',
      description:
        'Study human anatomy in a fully immersive VR environment. Explore detailed 3D models of the human body and learn about various systems and organs interactively.',
      image: 'https://as2.ftcdn.net/v2/jpg/07/22/71/49/1000_F_722714979_cGdzp7YPXbR9UdTDUmO2NurSbdoMv0nD.jpg',
    },
    {
      title: 'Building and Construction',
      description:
        'Learn the fundamentals of building and construction. Use AR to visualize structures, understand construction techniques, and see how different materials are used.',
      image: 'https://as2.ftcdn.net/v2/jpg/01/43/62/11/1000_F_143621122_2YtgdzvfSRBtMrBv2oGY2kJgcoWD2aGv.jpg',
    },
    {
      title: 'Exploring Solar Systems',
      description:
        'Travel through space and explore our solar system in a VR setting. Understand the characteristics of planets, moons, and other celestial bodies.',
      image: 'https://as1.ftcdn.net/v2/jpg/07/47/47/28/1000_F_747472813_BRc5sJyx8ARzzMKVktx20MATlKUfupNh.jpg',
    },
    {
      title: 'Robotics Mechanics',
      description:
        'Learn the basics of robotics mechanics with augmented reality. See how robots are designed, built, and programmed, and explore all the possibilities.',
      image: 'https://as2.ftcdn.net/v2/jpg/07/83/26/95/1000_F_783269593_jXtGuD0zCDkM3MoAQue4C7lxqn4tPauE.jpg',
    },
    {
      title: 'Physics',
      description:
        'Conduct virtual physics experiments in a VR environment. Explore the principles of physics, from classical mechanics to electromagnetism, and understand the miracles around us.',
      image: 'https://as1.ftcdn.net/v2/jpg/03/15/93/12/1000_F_315931249_rSi7bow4pS1nueeoQqpEG57IkPiFisZQ.jpg',
    },
  ];

  return (
    <>
      <SearchBar />
      <CardList cards={courses} />
    </>
  );
};

export default CoursesCatalogue;
