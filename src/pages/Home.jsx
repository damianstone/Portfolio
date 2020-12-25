import React, {useState} from 'react'
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Hero from '../components/Hero/Hero';
import Info from '../components/InfoSection/Info';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import { HomeObjOne, HomeObjTwo } from '../components/InfoSection/Data';

const Home = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }



    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}  />
            <Hero />
            <Info {...HomeObjOne} />
            <Projects />
            <Info {...HomeObjTwo} />
            <Footer />
        </>
    )
}

export default Home
