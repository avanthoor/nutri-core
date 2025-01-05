import { Flex, GridItem } from "@chakra-ui/react";

import RecipeDetails from "@widgets/recipe-details/ui";

const RecipePage: React.FC = () => (
  <GridItem colSpan={5}>
    <Flex alignItems="center" direction="column" mb="24px" mt="104px">
      <RecipeDetails  />
    </Flex>
  </GridItem>
);

export default RecipePage;
