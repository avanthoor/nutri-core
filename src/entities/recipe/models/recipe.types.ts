export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
  isChecked: boolean;
}


export type InstructionRecipeStep = {
  number: number;
  text: string;
}

export interface Recipe {
  type: string;
  title: string;
  difficultyLevel: string;
  time: string;
  img: string;
  ingredients: Ingredient[];
  instruction: {
    steps: InstructionRecipeStep[];
  }
};