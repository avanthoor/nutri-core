import { Flex, GridItem } from "@chakra-ui/react";

import { mockRecipe } from "@entities/recipe/models/recipe.data";
import RecipeCard from "@entities/recipe/ui/RecipeCard";

const RecipePage = () => (
    <GridItem colSpan={5}>
      <Flex direction="column" alignItems="center" mt="104px" mb="24px">
        <RecipeCard {...mockRecipe} />
      </Flex>
    </GridItem>
  );

export default RecipePage;
