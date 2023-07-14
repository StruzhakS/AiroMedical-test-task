import Counter from 'Store/Store';
import Bears from './Bears';
import AllRecipes from './AllRecipes/AllRecipes';
import { Navigate, Route, Routes } from 'react-router-dom';
import BeersRecipe from './BeersRecipe/BeersRecipe';

export const App = () => {
  return (
    <div>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <AllRecipes /> */}
      <Counter />
      <Routes>
        <Route path={'/'} element={<AllRecipes />} />
        <Route path={`recipe/:id`} element={<BeersRecipe />} />
        <Route path="*" element={<Navigate to={'/'} />} />

        {/* <Counter /> */}
      </Routes>
      {/* <Bears /> */}
    </div>
  );
};
