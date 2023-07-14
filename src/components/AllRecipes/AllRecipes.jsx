import { useRecipeStore } from 'Store/Store';
import React from 'react';
import s from './AllRecipes.module.css';
import RecipeItem from 'components/RecipeItem/RecipeItem';

const AllRecipes = () => {
  const allRecipes = useRecipeStore(state => state.recipes);
  const recipesToDelete = useRecipeStore(state => state.recipesToDelete);

  return (
    <>
      <ul className={s.listRecipes}>
        {allRecipes.map((el, i) => (
          <RecipeItem el={el} i={i} />
        ))}
      </ul>
      {recipesToDelete.length > 0 && <button>Delete</button>}
    </>
  );
};

export default AllRecipes;
