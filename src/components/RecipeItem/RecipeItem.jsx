import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './RecipeItem.module.css';
import { useRecipeStore } from 'Store/Store';
import imgNotFound from '../../image/beer.jpg';

const RecipeItem = ({ el }) => {
  const setStatus = useRecipeStore(state => state.setStatus);

  const navigate = useNavigate();

  const contextMenu = e => {
    e.preventDefault();
    !el.checked
      ? setStatus({ id: el.id, checked: true })
      : setStatus({ id: el.id, checked: false });
  };

  return (
    <li
      key={el.name}
      className={
        el.checked === true ? s.listRecipesItemDelete : s.listRecipesItem
      }
      id={el.id}
      onContextMenu={e => contextMenu(e)}
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
