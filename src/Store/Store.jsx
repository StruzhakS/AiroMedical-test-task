import { getAllRecipesApi } from 'Services/services';
import { useEffect } from 'react';
import { create } from 'zustand';

export const useBearStore = create(set => ({
  recipes: [],
  addAllRecipes: payload => set({ recipes: [...payload] }),
  //   decreasePopulation: () => set(state => ({ bears: state.bears - 1 })),

  removeAllBears: () => set({ bears: 0 }),
}));

function Counter() {
  const { recipes, addAllRecipes } = useBearStore();

  useEffect(() => {
    const getReceips = async () => {
      const receipsData = await getAllRecipesApi();
      addAllRecipes(receipsData);
    };
    getReceips();
  }, [addAllRecipes]);
  console.log(recipes);

  return (
    <ul>
      {recipes.map((el, i) => (
        <li key={i}>
          <h3>{el.name}</h3>
          <img src={el.image_url} alt={el.name} width="60px" />
          <p>Description: {el.description}</p>
          <p>First brewed at {el.first_brewed}</p>
          <p>
            Food pairing{' '}
            {el.food_pairing.map(el => (
              <span>{el}, </span>
            ))}
          </p>
          <p>Ingredients: </p>
          <span>Hops:</span>{' '}
          <ul>
            {el.ingredients.hops.map((el, i) => (
              <li key={el.id}>
                <span>
                  {el.name} - {el.amount.value} {el.amount.unit},
                </span>
                <span> add at {el.add}</span>
              </li>
            ))}
          </ul>
          <span>Malt:</span>{' '}
          <ul>
            {el.ingredients.malt.map(el => (
              <li key={el.id}>
                <span>
                  {el.name} - {el.amount.value} {el.amount.unit}
                </span>
              </li>
            ))}
          </ul>
          <p>Tagline: {el.tagline}</p>
          <p>Method of brewing: </p>
          <span>
            - temperatura of fermentation - {el.method.fermentation.temp.value}
            {'\u00b0'};
          </span>
          <p>
            - a mash temperature - {el.method.mash_temp[0].temp.value}
            {'\u00b0'}{' '}
            {el.method.mash_temp[0].duration &&
              `duration ${el.method.mash_temp[0].duration} minutes.`}
          </p>
        </li>
      ))}
    </ul>
  );
}
export default Counter;
