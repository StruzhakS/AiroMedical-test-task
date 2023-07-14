import { useRecipeStore } from 'Store/Store';
import React, { useEffect, useState } from 'react';
import s from './AllRecipes.module.css';
import RecipeItem from 'components/RecipeItem/RecipeItem';
import { getAllRecipesApi } from 'Services/services';

const AllRecipes = () => {
  const { recipes, addAllRecipes } = useRecipeStore();
  const [page, setPage] = useState(1);

  const allRecipes = useRecipeStore(state => state.recipes);

  const removeSelectedRecipes = useRecipeStore(
    state => state.removeSelectedRecipes
  );

  const recipesToDelete = useRecipeStore(state => state.recipesToDelete);

  useEffect(() => {
    const getReceips = async () => {
      const receipsData = await getAllRecipesApi(page);
      setPage(prev => prev + 1);
      addAllRecipes(receipsData);
    };
    recipes.length === 0 && getReceips();
  }, [addAllRecipes, page, recipes.length]);

  useEffect(() => {
    if (page === 14) {
      setPage(1);
    }
  }, [page]);

  return (
    <>
      <ul className={s.listRecipes}>
        {allRecipes.slice(0, 15).map((el, i) => (
          <RecipeItem el={el} i={i} />
        ))}
      </ul>
      {recipesToDelete.length > 0 && (
        <button
          onClick={() => {
            removeSelectedRecipes();
          }}
          className={s.deleteBtn}
        >
          Delete
        </button>
      )}
    </>
  );
};

export default AllRecipes;
