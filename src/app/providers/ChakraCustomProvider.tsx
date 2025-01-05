"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "../../shared/ui/Chakra/color-mode";

const ChakraCustomProvider = (props: ColorModeProviderProps) => (
  <ChakraProvider value={defaultSystem}>
    <ColorModeProvider {...props} />
  </ChakraProvider>
);
  
export default ChakraCustomProvider;
