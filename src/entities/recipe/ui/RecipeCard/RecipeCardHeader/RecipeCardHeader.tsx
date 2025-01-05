import { FC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BsSave } from "react-icons/bs";
import { SlNote } from "react-icons/sl";

import { Button } from "@shared/ui/Chakra/button";
import LineBox from "@shared/ui/LineBox";
import { RecipeCardHeaderProps } from "./RecipeCardHeader.types";

const RecipeCardHeader: FC<RecipeCardHeaderProps> = (props) => {
  const { title, type, difficultyLevel, time } = props;

  return (
    <Box h="170px">
      <Flex gap="0.5" justify="flex-end">
        <Button
          color="black"
          size="xs"
          variant="ghost"
        >
          <BsSave />
        </Button>
        <Button
          color="black"
          size="xs"
          variant="ghost"
        >
          <SlNote />
        </Button>
      </Flex>
      <LineBox>
        <Flex align="center" justify="center">
          {type}
        </Flex>
      </LineBox>

      <LineBox>
        <Flex align="center" justify="center">
          {title}
        </Flex>
      </LineBox>

      <LineBox>
        <Flex justify="space-between" pl="15px" pr="15px">
          <Text>уровень сложности: {difficultyLevel}</Text>
          <Text>время приготовления: {time} </Text>
        </Flex>
      </LineBox>
    </Box>
  );
};

export default RecipeCardHeader;
