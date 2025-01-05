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
  instruction: {
    steps: [
      {
        number: 1,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
      },
      {
        number: 2,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
      },
      {
        number: 3,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
      },
      {
        number: 4,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
      },
      {
        number: 5,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
      },
      {
        number: 6,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
      },
      {
        number: 7,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
      },
      {
        number: 8,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
      },
      {
        number: 9,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
      },
      {
        number: 10,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit neque nec ante",
      },
    ],
  }
};