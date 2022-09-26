import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "shared/styles/theme";
import { GlobalStyles } from "shared/styles/globals";
import RoutesComponent from "./Routes";
import Layout from "shared/Layout";
import { useAppSelector } from "logic/hooks";

function App() {
  const { isDarkmode } = useAppSelector((state) => state.UI);
  return (
    <ThemeProvider theme={isDarkmode ? darkTheme : lightTheme}>
      <GlobalStyles />

      <Layout>
        <RoutesComponent />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
