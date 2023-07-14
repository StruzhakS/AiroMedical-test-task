import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './RecipeItem.module.css';
import { useRecipeStore } from 'Store/Store';
import imgNotFound from '../../image/beer.jpg';

const RecipeItem = ({ el }) => {
  const addRecipesToDelete = useRecipeStore(state => state.addRecipesToDelete);
  const removeRecipesToDelete = useRecipeStore(
    state => state.removeRecipesToDelete
  );
  const [x, setX] = useState(false);

  const handleClick = e => {
    if (e.nativeEvent.button === 0) {
      console.log(11111);
      return;
    } else if (e.nativeEvent.button === 2) {
      e.preventDefault();
      console.log(22222);

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
      key={el.name}
      className={x ? s.listRecipesItemDelete : s.listRecipesItem}
      id={el.id}
      onContextMenu={e => e.preventDefault()}
      onMouseDown={e => handleClick(e)}
    >
      <NavLink to={`/recipe/${el.id}`} className={s.linkBeer}>
        <div className={s.imageWrapper}>
          <img
            src={el.image_url ? el.image_url : imgNotFound}
            className={s.imageStyle}
            alt={el.name}
            width="75px"
          />
        </div>
        <div className={s.textWrapper}>
          <h3 className={s.beerTitle}>{el.name}</h3>
          <p className={s.beerText}>Alcohol by volum {el.abv}</p>
          <span className={s.beerText} style={{ fontStyle: 'italic' }}>
            {el.tagline}
          </span>
        </div>
      </NavLink>
    </li>
  );
};

export default RecipeItem;
