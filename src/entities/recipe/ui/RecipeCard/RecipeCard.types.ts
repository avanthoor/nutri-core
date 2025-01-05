export type RecipeCardProps = {
  title: string;
  type: string;
  difficultyLevel: string;
  image: string;
  cookingTime: string;
  ingredientsCalculatingCardSlot: React.ReactNode;
  instructionsSlot: React.ReactNode;
};