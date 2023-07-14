import { getAllRecipesApi } from 'Services/services';
import { useEffect, useState } from 'react';
import { create } from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],
  recipesToDelete: [],
  addAllRecipes: payload => set({ recipes: [...payload] }),
  //   decreasePopulation: () => set(state => ({ bears: state.bears - 1 })),
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
      // (el, i) => el.id !== state.recipesToDelete[i]
    })),

  removeAllBears: () => set({ bears: 0 }),
}));

// function Counter() {
//   const { recipes, addAllRecipes, recipesToDelete } = useRecipeStore();
//   const [page, setPage] = useState(1);
//   //   console.log(recipes);
//   useEffect(() => {
//     const getReceips = async () => {
//       const receipsData = await getAllRecipesApi(page);
//       setPage(prev => prev + 1);
//       addAllRecipes(receipsData);
//     };
//     recipes.length === 0 && getReceips();
//   }, [addAllRecipes, page, recipes.length]);

//   useEffect(() => {
//     !recipes && setPage(prev => prev + 1);
//     console.log(222222222);
//   }, [recipes]);

//   return (
// <ul>
//   {/* {recipes.map((el, i) => (
//     <li key={i}>
//       <h3>{el.name}</h3>
//       <img src={el.image_url} alt={el.name} width="60px" />
//       <p>Description: {el.description}</p>
//       <p>First brewed at {el.first_brewed}</p>
//       <p>
//         Food pairing{' '}
//         {el.food_pairing.map(el => (
//           <span>{el}, </span>
//         ))}
//       </p>
//       <p>Ingredients: </p>
//       <span>Hops:</span>{' '}
//       <ul>
//         {el.ingredients.hops.map((el, i) => (
//           <li key={el.id}>
//             <span>
//               {el.name} - {el.amount.value} {el.amount.unit},
//             </span>
//             <span> add at {el.add}</span>
//           </li>
//         ))}
//       </ul>
//       <span>Malt:</span>{' '}
//       <ul>
//         {el.ingredients.malt.map(el => (
//           <li key={el.id}>
//             <span>
//               {el.name} - {el.amount.value} {el.amount.unit}
//             </span>
//           </li>
//         ))}
//       </ul>
//       <p>Tagline: {el.tagline}</p>
//       <p>Method of brewing: </p>
//       <span>
//         - temperatura of fermentation - {el.method.fermentation.temp.value}
//         {'\u00b0'};
//       </span>
//       <p>
//         - a mash temperature - {el.method.mash_temp[0].temp.value}
//         {'\u00b0'}{' '}
//         {el.method.mash_temp[0].duration &&
//           `duration ${el.method.mash_temp[0].duration} minutes.`}
//       </p>
//     </li>
//   ))} */}
// </ul>
//   );
// }
// export default Counter;
