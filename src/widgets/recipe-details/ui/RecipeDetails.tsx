import React, { useMemo } from 'react';

import { mockRecipe } from "@entities/recipe/models/recipe.data";
import RecipeCard from '@entities/recipe/ui';
import IngredientsCalculatingCard from '@shared/ui/IngredientsCalculatingCard';
import Steps from '@shared/ui/Steps';

const {
  difficultyLevel,
  img,
  ingredients,
  instruction,
  time,
  title,
  type
} = mockRecipe;

const RecipeDetails: React.FC = () => {
  const ingredientsCalculatingCardSlot = useMemo(() => (
    <IngredientsCalculatingCard
      ingredients={ingredients}
      initialServingsCount={1}
    />
  ), []);

  const instructionsSlot = useMemo(() => (
    <Steps
      steps={instruction.steps}
    />
  ), []);

  return (
    <RecipeCard
      cookingTime={time}
      difficultyLevel={difficultyLevel}
      image={img}
      ingredientsCalculatingCardSlot={ingredientsCalculatingCardSlot}
      instructionsSlot={instructionsSlot}
      title={title}
      type={type}
    />
  );
};

export default RecipeDetails;