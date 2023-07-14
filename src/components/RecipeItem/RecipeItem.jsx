import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './RecipeItem.module.css';
import { useRecipeStore } from 'Store/Store';

const RecipeItem = ({ el, i }) => {
  const addRecipesToDelete = useRecipeStore(state => state.addRecipesToDelete);
  const removeRecipesToDelete = useRecipeStore(
    state => state.removeRecipesToDelete
  );
  const [x, setX] = useState(false);

  const handleClick = e => {
    if (e.nativeEvent.button === 0) {
      return;
    } else if (e.nativeEvent.button === 2) {
      e.preventDefault();
      setX(prev => !prev);
      if (!x) {
        addRecipesToDelete(Number(el.id));
      }
      if (x) {
        removeRecipesToDelete(Number(el.id));
      }
    }
  };

  return (
    <li
      style={
        x
          ? { backgroundColor: 'rgb(247, 120, 120)' }
          : { backgroundColor: 'white' }
      }
      key={i}
      className={s.listRecipesItem}
      id={el.id}
      onContextMenu={e => e.preventDefault()}
      onMouseDown={e => handleClick(e)}
    >
      <NavLink to={`recipe/${el.id}`} className={s.linkBeer}>
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
          <p className={s.beerText} style={{ fontStyle: 'italic' }}>
            {el.tagline}
          </p>
        </div>

        <div className={s.buttonWrapper}></div>
        <input
          className={s.chekBox}
          type="checkbox"
          checked={x}
          onChange={handleClick}
        />
      </NavLink>
    </li>
  );
};

export default RecipeItem;
