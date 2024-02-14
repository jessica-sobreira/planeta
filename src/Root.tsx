import { Header } from "./components/Header";
import { Container, CssBaseline, Grid } from "@mui/material";
import { CardAtracao } from "./components/CardAtracao";
import { useAppSelector } from "./config/hooks";
import { defaultTheme } from "./config/themes/default.theme";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./config/themes/darkmode.theme";


export function Root() {
    const atracoes = useAppSelector(state => state.atracoes);

    return (
    <>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Header />
                <Container>
                    <h1>Line up</h1>

                    <Grid container spacing={4}>
                        {
                            atracoes.map((item) => (
                                <Grid item xs={12} sm={4} md={3} lg={3} xl={1}>
                                    <CardAtracao atracao={item} />
                                </Grid>
                            ))
                        }
                        
                    </Grid>
            </Container>
        </ThemeProvider>
    </>
    )

}