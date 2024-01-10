// src/App.js
import React, { useState } from "react";
import {
  ChakraProvider,
  Container,
  Box,
  Button,
  Text,
  Grid,
  GridItem,
  background,
} from "@chakra-ui/react";
import ExpressionBar from "./Components/Expression";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./App.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(expression);
      if (!isFinite(result)) {
        setExpression("Error: Division by 0");
      } else {
        setExpression(result.toString());
        setHistory((prevHistory) => [
          ...prevHistory,
          `${expression} = ${result}`,
        ]);
      }
    } catch (error) {
      setExpression("Error");
    }
  };

  const handleClear = () => {
    setExpression("");
  };

  const handlePercentage = () => {
    setExpression((prevExpression) => {
      const percentageResult = (eval(prevExpression) / 100).toString();
      return percentageResult === "NaN" ? "Error" : percentageResult;
    });
  };

  const handleBackspace = () => {
    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  const handleParentheses = () => {
    // Check if the expression is empty
    if (expression === "") {
      setExpression((prevExpression) => prevExpression + "(");
    } else {
      // Check if the last character is an operator, opening parenthesis, or a dot
      const lastChar = expression.slice(-1);
      const isOperatorOrOpeningParenthesisOrDot = [
        "+",
        "-",
        "*",
        "/",
        "(",
        ".",
      ].includes(lastChar);

      // Determine whether to add an opening or closing parenthesis
      const value = isOperatorOrOpeningParenthesisOrDot ? "(" : ")";

      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const handleToggleSign = () => {
    setExpression((prevExpression) => {
      const lastChar = prevExpression.slice(-1);

      if (lastChar === "-" && prevExpression.slice(-2, -1) === "(") {
        // Remove the negative sign if the previous character is an opening parenthesis
        return prevExpression.slice(0, -2) + "(";
      }

      const toggledExpression =
        lastChar === "-" ? prevExpression.slice(0, -1) : prevExpression + "-";
      return toggledExpression;
    });
  };

  return (
    
      <Container maxW="container.sm" mt={200} width={"20em"}>
        <ExpressionBar
          expression={expression}
          handleBackspace={handleBackspace}
        />
        <Box borderWidth="1px" borderRadius="lg" p={5} bg={"#000000"}>
          <Grid templateColumns="repeat(4, 1fr)" gap={2}>
            <GridItem>
              <Button
                color={"#e01212"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={handleClear}
              >
                C
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#15e565"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={handleParentheses}
              >
                ( )
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#15e565"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={handlePercentage}
              >
                %
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#15e565"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={() => handleButtonClick("/")}
              >
                /
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#ffffff"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={() => handleButtonClick("7")}
              >
                7
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#ffffff"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={() => handleButtonClick("8")}
              >
                8
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#ffffff"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={() => handleButtonClick("9")}
              >
                9
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#15e565"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={() => handleButtonClick("*")}
              >
                x
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#ffffff"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={() => handleButtonClick("4")}
              >
                4
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#ffffff"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={() => handleButtonClick("5")}
              >
                5
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#ffffff"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={() => handleButtonClick("6")}
              >
                6
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#15e565"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={() => handleButtonClick("-")}
              >
                -
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#ffffff"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={() => handleButtonClick("1")}
              >
                1
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#ffffff"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={() => handleButtonClick("2")}
              >
                2
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#ffffff"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={() => handleButtonClick("3")}
              >
                3
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#15e565"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={() => handleButtonClick("+")}
              >
                +
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#ffffff"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={handleToggleSign}
              >
                +/-
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#ffffff"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={() => handleButtonClick("0")}
              >
                0
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#ffffff"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#b4b2b2"}
                onClick={() => handleButtonClick(".")}
              >
                .
              </Button>
            </GridItem>
            <GridItem>
              <Button
                color={"#ffffff"}
                fontWeight={800}
                borderRadius={"100px"}
                backgroundColor={"#15e565"}
                onClick={handleCalculate}
              >
                =
              </Button>
            </GridItem>
          </Grid>
        </Box>
        <Box mt={4}>
          <Text fontSize="lg" fontWeight="bold">
            History:
          </Text>
          <ul>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Box>
      </Container>
  );
};

const App = () => {
  return (
    <ChakraProvider>
      <Box>
        <NavBar />
        <Container maxW="container.sm" mt={10}></Container>
      </Box>
      <Calculator />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
