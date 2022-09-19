import { useState } from "react";
import { ThemeProvider } from "styled-components";

import Sun from "assets/sun.svg";
import Moon from "assets/moon.svg";
import { darkTheme, lightTheme } from "shared/styles/theme";
import { AppWrapper, PositionDiv } from "modules/todo/styles";
import { GlobalStyles } from "shared/styles/globals";
import Todo from "modules/todo";

function App() {
  const [isDark, setIsdark] = useState(false);

  const toggleTheme = () => {
    setIsdark((dark) => !dark);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppWrapper>
        <PositionDiv>
          <button onClick={toggleTheme}>
            <img src={isDark ? Sun : Moon} alt="theme icon" />
          </button>
        </PositionDiv>
        <h1>Todo</h1>
        <Todo />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
