import { useRecipeStore } from 'Store/Store';
import React, { useEffect, useState } from 'react';
import s from './AllRecipes.module.css';
import RecipeItem from 'components/RecipeItem/RecipeItem';
import { getAllRecipesApi } from 'Services/services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllRecipes = () => {
  const notify = () =>
    toast.info(
      'To delete a recipe, right-click on it and then click the delete button',
      {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      }
    );
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

  useEffect(() => {
    recipes.length === 25 && page === 1 && notify();
  }, [page, recipes.length]);

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
      {/* <Outlet /> */}

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
