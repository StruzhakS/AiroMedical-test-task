import AllRecipes from './AllRecipes/AllRecipes';
import { Navigate, Route, Routes } from 'react-router-dom';
import BeersRecipe from './BeersRecipe/BeersRecipe';
import HomePage from './HomePage/HomePage';
import { useEffect, useState } from 'react';
import { useRecipeStore } from 'Store/Store';
import { getAllRecipesApi } from 'Services/services';
import { notify } from 'Helpers';

export const App = () => {
  const [page, setPage] = useState(1);
  const { recipes, addAllRecipes } = useRecipeStore();
  // console.log(recipes);
  useEffect(() => {
    const getReceips = async () => {
      try {
        const receipsData = await getAllRecipesApi(page);
        setPage(prev => prev + 1);
        addAllRecipes(receipsData);
      } catch (error) {
        console.log(error.message);
      }
    };
    recipes.length === 0 && getReceips();
  }, [addAllRecipes, page, recipes.length]);

  useEffect(() => {
    if (page === 14) {
      setPage(1);
    }
  }, [page]);

  useEffect(() => {
    recipes.length === 25 && page === 1 && notify();
  }, [page, recipes.length]);

  return (
    <div>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/recipes'} element={<AllRecipes />} />
        <Route path={`recipes/:id`} element={<BeersRecipe />} />

        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
};
