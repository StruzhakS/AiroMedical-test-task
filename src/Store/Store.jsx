import { create } from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],
  addAllRecipes: payload =>
    set({ recipes: payload.map(el => ({ ...el, checked: false })) }),
  setStatus: payload =>
    set(state => ({
      recipes: state.recipes.map(el =>
        el.id === payload.id ? { ...el, checked: payload.checked } : el
      ),
    })),
  addRecipesToDelete: payload =>
    set(state => ({
      recipesToDelete: state.recipes.filter(el => el.checked),
    })),
  removeSelectedRecipes: () =>
    set(state => ({
      recipes: state.recipes.filter(el => !el.checked),
    })),

  removeAllBears: () => set({ bears: 0 }),
}));
