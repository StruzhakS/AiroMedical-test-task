import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './RecipeItem.module.css';
import { useRecipeStore } from 'Store/Store';
import imgNotFound from '../../image/beer.jpg';

const RecipeItem = ({ el }) => {
  const addRecipesToDelete = useRecipeStore(state => state.addRecipesToDelete);
  const removeRecipesToDelete = useRecipeStore(
    state => state.removeRecipesToDelete
  );
  const setStatus = useRecipeStore(state => state.setStatus);

  const [x, setX] = useState(false);
  const navigate = useNavigate();

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

  const contextMenu = e => {
    e.preventDefault();
    x
      ? setStatus({ id: el.id, checked: true })
      : setStatus({ id: el.id, checked: false });
  };

  return (
    <li
      key={el.name}
      className={el.checked ? s.listRecipesItemDelete : s.listRecipesItem}
      id={el.id}
      onContextMenu={e => contextMenu(e)}
      onMouseDown={e => handleClick(e)}
      onClick={() => {
        navigate(`${el.id}`);
      }}
    >
      <div>
        <img
          src={el.image_url ? el.image_url : imgNotFound}
          className={s.imageStyle}
          alt={el.name}
          width="75px"
        />
      </div>
      <div>
        <h3 className={s.beerTitle}>{el.name}</h3>
        <p className={s.beerText}>Alcohol by volum {el.abv}</p>
        <span className={s.beerText} style={{ fontStyle: 'italic' }}>
          {el.tagline}
        </span>
      </div>
    </li>
  );
};

export default RecipeItem;
