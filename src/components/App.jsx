import AllRecipes from './AllRecipes/AllRecipes';
import { Navigate, Route, Routes } from 'react-router-dom';
import BeersRecipe from './BeersRecipe/BeersRecipe';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<AllRecipes />} />
        <Route path={`recipe/:id`} element={<BeersRecipe />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
};
