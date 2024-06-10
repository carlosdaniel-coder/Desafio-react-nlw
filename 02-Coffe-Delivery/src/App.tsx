import { ThemeProvider } from "styled-components";
import { defaulTheme } from "./styles/theme/default";
import { Nada } from "./Nada.styles";



export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <p></p>
      <Nada> nada </Nada>
    </ThemeProvider>
  )
}
