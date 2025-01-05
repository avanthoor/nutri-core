export type CounterProps = {
  initialValue?: number;
  label: string;
  onChange?(value: number): void;
  maxValue?: number;
  minValue?: number;
};