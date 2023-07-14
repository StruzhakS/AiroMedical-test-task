import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';
import heroImg from '../../image/beers.jpg';
const HomePage = () => {
  return (
    <div className={s.heroWrapper}>
      <NavLink to={'recipes'} className={s.heroLink}>
        Go to Beers Recipes
      </NavLink>
      <img src={heroImg} alt="Pivasik" className={s.heroImg} />
    </div>
  );
};

export default HomePage;
