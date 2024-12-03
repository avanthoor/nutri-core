import LineBox from "@/LineBox";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface RecipeDescription {
    // просто лень🐱
  descriptions: any[];
}

const RecipeDescription: FC<RecipeDescription> = ({ descriptions }) => {
  return (
    <Box>
      <LineBox>
        <Flex justify="center" align="center">
          <Text>Инструкция</Text>
        </Flex>
      </LineBox>
      {descriptions.map((description) => {
        return (
          <LineBox>
            <HStack direction="row" gap="5px">
              <Box
                h="18px"
                w="18px"
                borderRadius="1px"
                // TODO: либо  orange.200 здесь и в чекбокс
                bgColor={description.step % 2 === 0 ? "orange.100" : "gray.200"}
                color="black"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text textStyle="xs"> {description.step}</Text>
              </Box>
              <Text textStyle="xs" w="600px">
                {description.value}
              </Text>
            </HStack>
          </LineBox>
        );
      })}
    </Box>
  );
};

export default RecipeDescription;
