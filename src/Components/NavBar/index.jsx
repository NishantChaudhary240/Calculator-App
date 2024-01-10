// src/components/NavBar.js
import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Flex align="center" justify="space-between" p={4} bg="#333" color="white">
      <Box>
        <Text fontSize="xl" fontWeight="bold">Calculator App</Text>
      </Box>
      {/* Add more navigation links or elements as needed */}
    </Flex>
  );
};

export default NavBar;
