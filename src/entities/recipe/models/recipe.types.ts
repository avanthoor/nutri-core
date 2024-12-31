import { Ingredient } from "../../ingredient/model/Ingredient.types";

export type RecipeDescription = {
  step: number;
  value: string;
}

export interface Recipe {
  type: string;
  title: string;
  difficultyLevel: string;
  time: string;
  img: string;
  ingredients: Ingredient[];
  descriptions: RecipeDescription[];
};