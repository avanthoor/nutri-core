import RecipeCardTitle from "@/RecipeTitle";
import RecipeIngredientCard from "@/RecipeLeftColumn";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import croissant from "@assets/8decc0fe3f63fcdd7cefba18c7863ab2.jpg";
import Description from "@/RecipeDescriptoin";
import decor from "@/assets/Component1.png";

const RecipeCard = () => {
  const testRecipe = {
    type: "дессерт",
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
  return (
    <Box bg="white" w="940px" p={25} color="black" h="auto" shadow="lg">
      <Grid
        // templateRows="repeat(5, 1fr)"  //TODO: или так
        templateRows="auto"
        templateColumns="repeat(3, 1fr)"
        h="auto"
        gap={22}
      >
        <GridItem colSpan={3}>
          <RecipeCardTitle
            title={testRecipe.title}
            type={testRecipe.type}
            difficultyLevel={testRecipe.difficultyLevel}
            time={testRecipe.time}
          />
        </GridItem>

        <GridItem colSpan={1}>
          <Box h="auto">
            <RecipeIngredientCard
              img={testRecipe.img}
              ingredients={testRecipe.ingredients}
            />
          </Box>
        </GridItem>

        <GridItem colSpan={2}>
          <Box h="auto">
            <Description descriptions={testRecipe.descriptions} />
          </Box>
        </GridItem>

        <GridItem colSpan={3}>
          {/* TODO: отредактировать картинку (дополнительно: на каждую категорию разный декор) */}
          <Image src={decor} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default RecipeCard;
