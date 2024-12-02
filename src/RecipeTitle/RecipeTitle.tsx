import LineBox from "@/LineBox";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { BsSave } from "react-icons/bs";
import { FC } from "react";
import { SlNote } from "react-icons/sl";

interface RecipeCardTitle {
  title: string;
  type: string;
  difficultyLevel: string;
  time: string;
}

//TODO: вынести куда-то
export const hoverIconButton = {
  bg: "none",
  transform: "scale(1.1)",
};

const RecipeTitle: FC<RecipeCardTitle> = (props) => {
  const { title, type, difficultyLevel, time } = props;
  return (
    <Box h="170px">
      <Flex gap="0.5" justify="flex-end">
        {/* TODO: нужно это выносить в отдельный компонент IconButton, чтобы не указывать одни и теже пропсы здесь подряд? */}
        <IconButton
          size="xs"
          variant="ghost"
          color="black"
          _hover={hoverIconButton}
        >
          <BsSave />
        </IconButton>
        <IconButton
          size="xs"
          variant="ghost"
          color="black"
          _hover={hoverIconButton}
        >
          <SlNote />
        </IconButton>
      </Flex>
      <LineBox>
        {/* TODO: или зделать 2 комипонента lineBox: с центральны и  с левым положением текста внутри  чтобы не писать Flex какждый раз, где  нужно центрировать текст*/}
        <Flex justify="center" align="center">
          {type}
        </Flex>
      </LineBox>

      <LineBox>
        <Flex justify="center" align="center">
          {title}
        </Flex>
      </LineBox>

      <LineBox>
        <Flex pl="15px" pr="15px" justify="space-between">
          <Text>уровень сложности: {difficultyLevel}</Text>
          <Text>время приготовления: {time} </Text>
        </Flex>
      </LineBox>
    </Box>
  );
};

export default RecipeTitle;
