import React from 'react';
import Hero from '../components/sections/Hero';
import UpcomingEvents from '../components/sections/UpcomingEvents';
import SocialSection from '../components/sections/SocialSection';

const Home = () => {
  return (
    <>
      <Hero />
      <UpcomingEvents />
      <SocialSection />
    </>
  );
};

export default Home;
