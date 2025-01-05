import React from 'react';
import { Flex, HStack, Text } from '@chakra-ui/react';
import { BsPlusSquare } from 'react-icons/bs';
import { PiMinusSquareLight } from 'react-icons/pi';

import { Button } from "@shared/ui/Chakra/button";
import { useCounter } from '@shared/utils';
import LineBox from '../LineBox';
import { CounterProps } from './Counter.types';
import { NumberInputField, NumberInputRoot } from '../Chakra/number-input';

const Counter: React.FC<CounterProps> = ({ onChange, initialValue = 0, label, maxValue, minValue }) => {
  const [value, handleIncrementValue, handleDecrementValue, handleSetValue] = useCounter(initialValue, { maxValue, minValue, onChange });

  const handleNumberInputFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    
    onChange?.(value);
    handleSetValue(value);
  };

  return (
    <LineBox>
      <Flex align="center" justify="space-between">
        <HStack direction="row" gap="1.5px">
          <Text textStyle="xs" textTransform="uppercase">
            {label}:
          </Text>
          <NumberInputRoot>
            <NumberInputField
              border="none"
              h="16px"
              max={maxValue}
              min={minValue}
              onChange={handleNumberInputFieldChange}
              p="1px"
              value={value}
            />
          </NumberInputRoot>
        </HStack>
        {/* TODO: доработать расстояния между кнопками: тут вокруг svg какие-то отступы
                TODO: выбрать иконки*/}
        <HStack direction="row">
          <Button
            color="black"
            minWidth="unset"
            onClick={handleDecrementValue}
            p="0"
            size="xs"
            variant="ghost"
                
          >
            <PiMinusSquareLight />
          </Button>
          <Button
            color="black"
            minWidth="unset"
            onClick={handleIncrementValue}
            p="0px"
            size="xs"
            variant="ghost"
          >
            <BsPlusSquare />
          </Button>
        </HStack>
      </Flex>
    </LineBox>
  );
};

export default Counter;