export type Ingredient = {
  name: string;
  unit: string;
  quantity: number;
}

export type IngredientsCalculatingCardProps = {
  ingredients: Ingredient[];
  initialServingsCount: number;
  onChange?(ingredients: Ingredient[], servingsCount: number): void;
};