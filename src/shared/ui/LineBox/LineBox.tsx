import React, { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

const LineBox: React.FC<PropsWithChildren> = ({ children }) => (
    <Box borderBottom="1px solid black" pt="10px" pb="10px">
      {children}
    </Box>
  );

export default LineBox;
