import React, { useState, useEffect } from 'react';

const About = ({ id }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [resetAnimation, setResetAnimation] = useState(false);
  const [showName, setShowName] = useState(false); // New state to control rendering of the name
  const [typedName, setTypedName] = useState(''); // State to control the gradually typed name

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      if (scrolled > lastScrollTop) {
        setIsScrollingDown(true);
        setIsScrollingUp(false);
      } else {
        setIsScrollingDown(false);
        setIsScrollingUp(true);
        setResetAnimation(prevState => !prevState);
        setShowName(true); // Show the name when scrolling up
      }

      setLastScrollTop(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, resetAnimation]);

  useEffect(() => {
    // Simulate typing effect for the name initially
    if (!showName && typedName !== 'Hi , I am Micheal George') {
      const typingTimer = setTimeout(() => {
        setTypedName(prevName => prevName + 'Hi , I am Micheal George'[prevName.length]);
      }, 100); // Typing speed in milliseconds
      return () => clearTimeout(typingTimer);
    }
  }, [showName, typedName]);

  const scrollToSection = (id) => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='' id={id}>
      <div className='container-fluid'>
        <div className="row">
          <div className="col about d-flex justify-content-between flex-row p-5">
            <div className={`profile-text ${isScrollingDown ? 'animate-moveLeft' : ''} ${isScrollingUp ? 'animate-moveRight' : ''}`}>
              {/* Conditional rendering of the name */}
              <h1 className='name'>{typedName}</h1>
              <h6 className='description'>
I am a fervent full-stack developer, committed to translating concepts into digital brilliance. With expertise in both frontend finesse and backend robustness .</h6>
              <div className='d-flex justify-content-center'>
                <button onClick={() => scrollToSection('bio')} className='btn  about-btn d-flex align-items-center justify-content-center bg-white px-3'><h3 className='mt-2'>About ...</h3></button>
              </div>
            </div>
            <div className='profile-image d-flex justify-content-center align-items-center w-50'>
              <div className='d-flex justify-content-center align-items-center w-100'>
                <img className={`image w-75 ${isScrollingUp ? 'image-moveRight' : ''} ${isScrollingDown ? 'image-moveLeft' : ''} ${resetAnimation ? 'reset-animation' : ''}`} src="https://res.cloudinary.com/dkwftase4/image/upload/v1711615911/portfolio_pic_jdctnz.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;