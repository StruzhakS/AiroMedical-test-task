import { create } from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],
  recipesToDelete: [],
  addAllRecipes: payload =>
    set({ recipes: payload.map(el => ({ ...el, checked: false })) }),
  setStatus: payload =>
    set(state => ({
      recipes: state.recipes.map(el =>
        el.id === payload.id ? { ...el, checked: payload.checked } : el
      ),
    })),
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
