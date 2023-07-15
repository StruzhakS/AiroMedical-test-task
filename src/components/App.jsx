import AllRecipes from './AllRecipes/AllRecipes';
import { Navigate, Route, Routes } from 'react-router-dom';
import BeersRecipe from './BeersRecipe/BeersRecipe';
import HomePage from './HomePage/HomePage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/recipes'} element={<AllRecipes />} />
        <Route path={`/recipes/:id`} element={<BeersRecipe />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
};
