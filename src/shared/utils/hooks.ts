import { useState } from "react";

import { isInRange } from "./utils";

type Params = {
  minValue?: number;
  maxValue?: number;
  onChange?(value: number): void;
};

type Return = [value: number, () => void, () => void, (value: number) => void]

export const useCounter = (initialValue: number, params?: Params): Return => {
  const {
    maxValue = Infinity,
    minValue = -Infinity,
    onChange,
  } = params || {};

  const validInitialValue = isInRange(initialValue, minValue, maxValue) ? initialValue : 0;

  const [value, setValue] = useState(validInitialValue);

  const handleIncrement = () => {
    setValue((prevValue) => {
      const incrementedValue = prevValue + 1;

      const newValue = incrementedValue <= maxValue ? incrementedValue : prevValue;
      onChange?.(newValue);
      return newValue;
    });
  };

  const handleDecrement = () => {
    setValue((prevValue) => {
      const decrementedValue = prevValue - 1;

      const newValue = decrementedValue >= minValue ? decrementedValue : prevValue;
      onChange?.(newValue);
      return newValue;
    });
  };

  const handleSetValue = (value: number) => {
    if (isInRange(value, minValue, maxValue)) {
      setValue(value);
      onChange?.(value);
    }
  };

  return [value, handleIncrement, handleDecrement, handleSetValue];
};
