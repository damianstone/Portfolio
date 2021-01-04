import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Hero from '../components/Hero/Hero';
import Who from '../components/Who/Who';
import Info from '../components/InfoSection/Info';
import Projects from '../components/Projects/Projects';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';
import { HomeObjOne, HomeObjTwo } from '../components/InfoSection/Data';

const Home = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Who {...HomeObjOne} />
      <Projects />
      <Blog />
      <Info {...HomeObjTwo} />
      <Footer />
    </>
  );
};

export default Home;
