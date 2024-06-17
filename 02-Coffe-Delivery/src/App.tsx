import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { Nada } from "./Nada.styles";
import { GlobalStyle } from "./styles/global";



export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
          <Nada></Nada>
    </ThemeProvider>
  )
}
