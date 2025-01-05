import { FC, useState } from "react";
import { Button, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";

import Counter from "@shared/ui/Counter";
import LineBox from "@shared/ui/LineBox";
import { isPositive } from "@shared/utils";
import { Ingredient, IngredientsCalculatingCardProps } from "./IngredientsCalculatingCard.types";

const IngredientsCalculatingCard: FC<IngredientsCalculatingCardProps> = ({ ingredients, onChange, initialServingsCount }) => {
  const [servingsCount, setServingsCount] = useState(isPositive(initialServingsCount) ? initialServingsCount : 1);
  const [calculatedIngredients, setCalculatedIngredients] = useState<Ingredient[]>(ingredients);

  const handleCounterChange = (newServingsCount: number) => {
    setServingsCount(newServingsCount);

    setCalculatedIngredients((prevIngredients) => {
      const _calculatedIngredients = prevIngredients.map((ingredient) => {
        const initialIngredientQuantity = ingredients.find(({ name }) => ingredient.name === name)!.quantity;

        return ({
          ...ingredient,
          quantity: initialIngredientQuantity * newServingsCount
        });
      });
      
      onChange?.(_calculatedIngredients, newServingsCount);

      return _calculatedIngredients;
    });
  };

  return (
    <Grid h="auto" templateRows="auto">
      <GridItem>
        <LineBox>
          <Flex align="center" justify="center">
            <Text>Ингридиенты:</Text>
          </Flex>
        </LineBox>

        <Counter
          initialValue={servingsCount}
          label="Количество порций"
          minValue={1}
          onChange={handleCounterChange}
        />

        {calculatedIngredients.map(({ name, quantity, unit }) => (
          <LineBox key={name}>
            <HStack direction="row" gap="3px">
              {/* <Checkbox variant="solid" checked={ingredient.isChecked} /> //TODO: */}
              <Text textStyle="xs">{name}:</Text>
              <Text fontWeight="800" textStyle="xs">
                {quantity}
              </Text>
              <Text textStyle="xs">{unit}</Text>
            </HStack>
          </LineBox>
        ))}
      </GridItem>

      <GridItem alignItems="center" display="flex" justifyContent="center">
        <Button
          _hover={{ bgColor: "orange.100" }}
          bgColor="gray.200"
          mt="10px"
          p="5px"
          w="100%"
        >
          <HStack direction="row" gap="3px">
            <Text textStyle="xs" textTransform="uppercase">
              Добавить в список покупок
            </Text>
            <CiShoppingCart />
          </HStack>
        </Button>
      </GridItem>
    </Grid>
  );
};

export default IngredientsCalculatingCard;