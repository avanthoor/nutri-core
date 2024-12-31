import RecipeCardTitle from "@entities/recipe/ui/RecipeTitle";
import RecipeIngredientCard from "@entities/recipe/ui/RecipeLeftColumn";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import Description from "@entities/recipe/ui/RecipeDescription";
import decor from "@shared/assets/Component1.png";
import { RecipeCardProps } from "./RecipeCard.types";

const RecipeCard: React.FC<RecipeCardProps> = (props) => {
  const { 
    descriptions,
    difficultyLevel,
    img,
    ingredients,
    time,
    title,
    type
  } = props;

  return (
    <Box bg="white" w="940px" p={25} color="black" h="auto" shadow="lg">
      <Grid
        templateRows="auto"
        templateColumns="repeat(3, 1fr)"
        h="auto"
        gap={22}
      >
        <GridItem colSpan={3}>
          <RecipeCardTitle
            title={title}
            type={type}
            difficultyLevel={difficultyLevel}
            time={time} />
        </GridItem>

        <GridItem colSpan={1}>
          <Box h="auto">
            <RecipeIngredientCard
              img={img}
              ingredients={ingredients} />
          </Box>
        </GridItem>

        <GridItem colSpan={2}>
          <Box h="auto">
            <Description descriptions={descriptions} />
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
