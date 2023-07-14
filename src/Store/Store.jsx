import { create } from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],
  recipesToDelete: [],
  addAllRecipes: payload => set({ recipes: [...payload] }),
  addRecipesToDelete: payload =>
    set(state => ({ recipesToDelete: [...state.recipesToDelete, payload] })),
  removeRecipesToDelete: payload =>
    set(state => ({
      recipesToDelete: state.recipesToDelete.filter(el => el !== payload),
    })),
  removeSelectedRecipes: () =>
    set(state => ({
      recipes: state.recipes.filter(
        ({ id }) => !state.recipesToDelete.includes(id)
      ),
      recipesToDelete: [],
    })),

  removeAllBears: () => set({ bears: 0 }),
}));
