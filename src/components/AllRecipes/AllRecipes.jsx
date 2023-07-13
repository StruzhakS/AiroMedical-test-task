import { useRecipeStore } from 'Store/Store';
import React, { useEffect } from 'react';
import s from './AllRecipes.module.css';
import { NavLink } from 'react-router-dom';
import AddButton from 'components/AddButton/AddButton';

const AllRecipes = () => {
  const allRecipes = useRecipeStore(state => state.recipes);

  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  });

  const handleContextMenu = e => {
    e.preventDefault();
    if (e.target.nodeName !== 'LI') {
      return;
    }
    console.log(e.target.id);
  };
  console.log(allRecipes);
  return (
    <ul className={s.listRecipes}>
      {allRecipes.map((el, i) => (
        <li
          onClick={() => console.log(el.id)}
          key={i}
          className={s.listRecipesItem}
          id={el.id}
        >
          <div className={s.imageWrapper}>
            <img
              src={el.image_url}
              className={s.imageStyle}
              alt={el.name}
              width="75px"
            />
          </div>
          <div className={s.textWrapper}>
            <h3 className={s.beerTitle}>{el.name}</h3>
            <p className={s.beerText}>Alcohol by volum {el.abv}</p>
            <p className={s.beerText}>{el.tagline}</p>
          </div>

          <div className={s.buttonWrapper}></div>
          <AddButton />
          <NavLink to={`recipe/${el.id}`} className={s.linkBeer}>
            Read more
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AllRecipes;
