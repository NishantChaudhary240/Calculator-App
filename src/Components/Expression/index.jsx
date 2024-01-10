// src/components/ExpressionBar.js
import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const ExpressionBar = ({ expression, handleBackspace }) => {
  return (
    <Box borderWidth="2px" borderRadius="10px" p={5} bg={"#000000"} position="relative" relative >
      <Button
        color={"#e01212"}
        fontWeight={800}
        borderRadius={"100px"}
        backgroundColor={"#000000"}
        onClick={handleBackspace}
        position="absolute"
        top="5px"
        right="5px"
      >
        ⌫
      </Button>
      <Text fontSize="3xl" mb={5} color={"#ffffff"}>
        {expression}
      </Text>
    </Box>
  );
};

export default ExpressionBar;
