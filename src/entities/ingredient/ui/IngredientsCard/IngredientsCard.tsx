import { FC } from "react";
import { Button, Grid, GridItem, HStack, Input, Text } from "@chakra-ui/react";
import LineBox from "@shared/ui/LineBox";
import {Flex } from "@chakra-ui/react";
import { hoverIconButton } from "@entities/recipe/ui/RecipeTitle/RecipeTitle";
import { CiShoppingCart } from "react-icons/ci";
import { BsPlusSquare } from "react-icons/bs";
import { PiMinusSquareLight } from "react-icons/pi";

interface IngredientsCard {
  // просто лень😒
  ingredients: any[];
}

const IngredientsCard: FC<IngredientsCard> = ({ ingredients }) => (
    <Grid templateRows="auto" h="auto">
      <GridItem>
        <LineBox>
          <Flex justify="center" align="center">
            <Text>Ингридиенты:</Text>
          </Flex>
        </LineBox>

        <LineBox>
          <Flex justify="space-between" align="center">
            <HStack direction="row" gap="1.5px">
              <Text textStyle="xs" textTransform="uppercase">
                Количество порций:
              </Text>
              <Input placeholder="22" h="16px" w="16px" border="none" p="1px" />
            </HStack>
            {/* TODO: доработать расстояния между кнопками: тут вокруг svg какие-то отступы
                TODO: выбрать иконки*/}
            <HStack direction="row">              
              <Button
                size="xs"
                variant="ghost"
                color="black"
                _hover={hoverIconButton}
                p="0"
                minWidth="unset"
              >
                <PiMinusSquareLight />
              </Button>
              <Button
                size="xs"
                variant="ghost"
                color="black"
                _hover={hoverIconButton}
                p="0px"
                minWidth="unset"
              >
                <BsPlusSquare />
              </Button>
            </HStack>
          </Flex>
        </LineBox>

        {ingredients.map((ingredient) => (
            <LineBox>
              <HStack direction="row" gap="3px">
                {/* <Checkbox variant="solid" checked={ingredient.isChecked} /> //TODO: */}
                <Text textStyle="xs"> {ingredient.name}: </Text>
                <Text textStyle="xs" fontWeight="800">
                  {ingredient.quantity}
                </Text>
                <Text textStyle="xs"> {ingredient.unit}</Text>
              </HStack>
            </LineBox>
          ))}
      </GridItem>

      <GridItem display="flex" justifyContent="center" alignItems="center">
        <Button
          p="5px"
          w="100%"
          bgColor="gray.200"
          mt="10px"
          _hover={{ bgColor: "orange.100" }}
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

export default IngredientsCard;
