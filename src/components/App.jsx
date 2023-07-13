import Counter from 'Store/Store';
import Bears from './Bears';
import AllRecipes from './AllRecipes/AllRecipes';

export const App = () => {
  return (
    <div>
      <AllRecipes />
      <Counter />
      {/* <Bears /> */}
    </div>
  );
};
