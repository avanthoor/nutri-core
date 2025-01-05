export const isPositive = (value: string | number): boolean => Number(value) > 0;

export const isZero = (value: string | number): boolean => Number(value) === 0;

export const isNonNegative = (value: string | number): boolean => isPositive(value) || isZero(value);

export const isInRange = (value: string | number, minValue: string | number, maxValue: string | number) => (
  Number(value) <= Number(maxValue) && Number(value) >= Number(minValue)
);

export const isInStrictRange = (value: string | number, minValue: string | number, maxValue: string | number) => (
  Number(value) < Number(maxValue) && Number(value) > Number(minValue)
);