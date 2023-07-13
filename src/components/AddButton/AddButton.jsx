import React, { useState } from 'react';
import s from './AddButton.module.css';

const AddButton = () => {
  const [addRecipe, setAddRecipe] = useState('Add recipe');
  const handleClick = e => {
    addRecipe === 'Add recipe'
      ? setAddRecipe('Delete recipe')
      : setAddRecipe('Add recipe');
    console.dir(e.currentTarget);
    console.log(e.target);
  };
  return (
    <div>
      <button
        style={
          addRecipe === 'Delete recipe'
            ? { backgroundColor: 'red' }
            : { backgroundColor: 'rgb(62, 136, 10)' }
        }
        onClick={e => handleClick(e)}
        className={s.addButton}
      >
        {addRecipe}
      </button>
    </div>
  );
};

export default AddButton;
