import RecipeCard from "@/RecipeCard";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

const RecipePage = () => {
  {
    /* TODO: создать тему и шрифты
       TODO: доработать адаптив
       TODO: что делать с компонетами chakra, которые несколько раз принимают одни и теже пропсы

       */
  }
  return (
    <Grid templateColumns="repeat(6, 1fr)" position="relative">
      <GridItem colSpan={1} h="100vh" position="sticky" top="0">
        <Box bg="white" color="black" w="100%" h="100vh">
          Левое меню
        </Box>
      </GridItem>
      <GridItem colSpan={5}>
        <Flex direction="column" alignItems="center" mt="104px" mb="24px">
          <RecipeCard />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default RecipePage;
