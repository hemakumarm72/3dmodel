import './Mode1.css';
import React, { useEffect } from 'react';
import logo from '../src/450-20180301183118.jpg';
import { NavLink } from 'react-router-dom';
const Model1 = () => {
  const Loader = () => {
    const body = document.querySelector('body');
    const section = document.querySelector('.book-showcase');
    const book = document.querySelector('.book');

    let prev = 0;
    let calc = 0;

    const sensitivity = 2;

    section.addEventListener('mousedown', function (e) {
      const x = e.clientX;
      section.addEventListener('mousemove', rotate);
      function rotate(e) {
        calc = (e.clientX - x) / sensitivity;
        book.style.transform = `rotateY(${calc + prev}deg)`;
        body.style.cursor = 'grabbing';
      }

      prev += calc;
      window.addEventListener('mouseup', function () {
        section.removeEventListener('mousemove', rotate);
        body.style.cursor = 'default';
      });
    });
  };

  useEffect(() => {
    Loader();
  }, []);
  return (
    <div>
      <section className='book-showcase'>
        <div className='wrapper'>
          <NavLink to='/3dModel'>3DModel</NavLink>
          <NavLink to='/3dModel1'>3DModel</NavLink>
          <div className='book'>
            <div className='front'>
              <img className='smallImg' src={logo} alt='#d' />
            </div>
            <div className='side'></div>
            <div className='back'></div>
            <div className='pages'></div>
            <div className='shadow'></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Model1;
