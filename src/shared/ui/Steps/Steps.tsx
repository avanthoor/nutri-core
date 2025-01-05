import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

import { StepsProps } from './Steps.types';
import LineBox from '../LineBox';

const Steps: React.FC<StepsProps> = ({ steps }) => (
  <React.Fragment>
    {steps.map(({ number, text }, index) => (
      <LineBox key={number}>
        <HStack direction="row" gap="5px">
          <Box
            alignItems="center"
            bgColor={index % 2 === 0 ? "orange.200" : "gray.100"}
            borderRadius="1px"
            color="black"
            display="flex"
            h="18px"
            justifyContent="center"
            w="18px"
          >
            <Text textStyle="xs">{index + 1}</Text>
          </Box>
          <Text textStyle="xs" w="600px">
            {text}
          </Text>
        </HStack>
      </LineBox>
    ))}
  </React.Fragment>
);

export default Steps;