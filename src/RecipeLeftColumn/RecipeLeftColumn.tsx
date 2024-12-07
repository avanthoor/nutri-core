import IngredientsCard from "@/IngredientsCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { FC } from "react";

interface RecipeLeftColumn {
  img: string;
  ingredients: any[];
}

const RecipeLeftColumn: FC<RecipeLeftColumn> = (props) => {
  const { img, ingredients } = props;
  return (
    <Grid templateRows="auto" h="auto">
      <GridItem>
        <Image w="100%" src={img} h="308px" />
      </GridItem>
      <GridItem>
        <IngredientsCard ingredients={ingredients} />
      </GridItem>
    </Grid>
  );
};

export default RecipeLeftColumn;
