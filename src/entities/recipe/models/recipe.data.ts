import croissant from "@shared/assets/8decc0fe3f63fcdd7cefba18c7863ab2.jpg";
import { Recipe } from "./recipe.types";

export const mockRecipe: Recipe = {
  type: "десерт",
  title: "Круассан с какой-то начинкой",
  difficultyLevel: "средняя",
  time: "40 мин.",
  img: croissant,
  ingredients: [
    { name: "масло сливочное", quantity: 200, unit: "гр", isChecked: true },
    { name: "яйца", quantity: 1, unit: "шт", isChecked: false },
    { name: "сахар", quantity: 200, unit: "гр", isChecked: false },
    { name: "масло сливочное", quantity: 200, unit: "гр", isChecked: true },
    { name: "яйца", quantity: 1, unit: "шт", isChecked: true },
    { name: "сахар", quantity: 200, unit: "гр", isChecked: true },
  ],
  descriptions: [
    {
      step: 1,
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
    },
    {
      step: 2,
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
    },
    {
      step: 3,
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
    },
    {
      step: 4,
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
    },
    {
      step: 5,
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
    },
    {
      step: 6,
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
    },
    {
      step: 7,
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
    },
    {
      step: 8,
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
    },
    {
      step: 9,
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
    },
    {
      step: 10,
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
    },
  ],
};