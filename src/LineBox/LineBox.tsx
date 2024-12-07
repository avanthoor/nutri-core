import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

const LineBox: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box borderBottom="1px solid black" pt="10px" pb="10px">
      {children}
    </Box>
  );
};

export default LineBox;
