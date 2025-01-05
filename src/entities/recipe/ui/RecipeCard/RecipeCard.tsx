
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

import decor from "@shared/assets/Component1.png";
import LineBox from "@shared/ui/LineBox";
import { RecipeCardProps } from "./RecipeCard.types";
import RecipeCardHeader from "./RecipeCardHeader";

const RecipeCard: React.FC<RecipeCardProps> = (props) => {
  const { 
    difficultyLevel,
    image,
    title,
    type,
    cookingTime,
    ingredientsCalculatingCardSlot,
    instructionsSlot
  } = props;

  return (
    <Box bg="white" color="black" h="auto" p={25} shadow="lg" w="940px">
      <Grid
        gap={22}
        h="auto"
        templateColumns="repeat(3, 1fr)"
        templateRows="auto"
      >
        <GridItem colSpan={3}>
          <RecipeCardHeader
            difficultyLevel={difficultyLevel}
            time={cookingTime}
            title={title}
            type={type}
          />
        </GridItem>

        <GridItem colSpan={1}>
          <Box h="auto">
            <Grid h="auto" templateRows="auto">
              <GridItem>
                <Image h="308px" src={image} w="100%" />
              </GridItem>
              <GridItem>
                {ingredientsCalculatingCardSlot}
              </GridItem>
            </Grid>
          </Box>
        </GridItem>

        <GridItem colSpan={2}>
          <Box h="auto">
            <Box>
              <LineBox>
                <Flex align="center" justify="center">
                  <Text>Инструкция</Text>
                </Flex>
              </LineBox>
              {instructionsSlot}
            </Box>
          </Box>
        </GridItem>

        <GridItem colSpan={3}>
          <Image src={decor} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default RecipeCard;
