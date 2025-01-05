// export type RecipeCardHeaderProps = {
//   title: string;
//   type: string;
//   difficultyLevel: string;
//   time: string;
// }

import { Recipe } from "@entities/recipe/models";

export type RecipeCardHeaderProps = Pick<Recipe, 'title' | 'type' | 'difficultyLevel' | 'time'>;