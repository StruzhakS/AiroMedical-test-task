import { useRecipeStore } from 'Store/Store';
import React from 'react';
import s from './AllRecipes.module.css';
import RecipeItem from 'components/RecipeItem/RecipeItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllRecipes = () => {
  const allRecipes = useRecipeStore(state => state.recipes);

  const removeSelectedRecipes = useRecipeStore(
    state => state.removeSelectedRecipes
  );

  const recipesToDelete = useRecipeStore(state => state.recipesToDelete);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
