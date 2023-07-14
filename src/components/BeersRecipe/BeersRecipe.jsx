import { useRecipeStore } from 'Store/Store';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import s from './BeersRecipe.module.css';
import imgNotFound from '../../image/beer.jpg';

const BeersRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  //   console.log(id);
  const allRecipes = useRecipeStore(state => state.recipes);
  useEffect(() => {
    const oneRecipe = allRecipes.filter(el => el.id === Number(id));
    setRecipe(oneRecipe);
  }, [allRecipes, id]);

  return (
    recipe.length && (
      <>
        <NavLink to={'/'} className={s.linkBack}>
          Go back
        </NavLink>
        <div className={s.boxWrapper}>
          <h2>{recipe[0].name}</h2>
          <img
            src={recipe[0].image_url ? recipe[0].image_url : imgNotFound}
            alt={recipe[0].name}
            width="120px"
            className={s.beerImg}
          />
          <p>Description: {recipe[0].description}</p>
          <p>First brewed at {recipe[0].first_brewed}</p>
          <p>
            Food pairing{' '}
            {recipe[0].food_pairing.map(el => (
              <span>{el}, </span>
            ))}
          </p>
          {/* <p>Ingredients: </p> */}
          <span>Hops:</span>{' '}
          <ul>
            {recipe[0].ingredients.hops.map((el, i) => (
              <li key={i}>
                <span>
                  {el.name} - {el.amount.value} {el.amount.unit},
                </span>
                <span> add at {recipe[0].add}</span>
              </li>
            ))}
          </ul>
          <span>Malt:</span>{' '}
          <ul>
            {recipe[0].ingredients.malt.map(el => (
              <li key={el.id}>
                <span>
                  {el.name} - {el.amount.value} {el.amount.unit}
                </span>
              </li>
            ))}
          </ul>
          <p>Tagline: {recipe[0].tagline}</p>
          <p>Method of brewing: </p>
          <span>
            - temperatura of fermentation -{' '}
            {recipe[0].method.fermentation.temp.value}
            {'\u00b0'};
          </span>
          <p>
            - a mash temperature - {recipe[0].method.mash_temp[0].temp.value}
            {'\u00b0'}{' '}
            {recipe[0].method.mash_temp[0].duration &&
              `duration ${recipe[0].method.mash_temp[0].duration} minutes.`}
          </p>
        </div>
      </>
    )
  );
};

export default BeersRecipe;
