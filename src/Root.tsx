import { Header } from "./components/Header";
import { Container, Grid } from "@mui/material";
import { CardAtracao } from "./components/CardAtracao";
import { useAppSelector } from "./config/hooks";



export function Root() {
    const atracoes = useAppSelector(state => state.atracoes);

    return (
    <>
    <Header />
        <Container>
            <h1>Line up</h1>

            <Grid container>
                {
                    atracoes.map(atracao => (
                        <Grid item xs={12} sm={4} md={3} lg={3} xl={1}>
                            <CardAtracao atracao={atracao} />
                        </Grid>
                    ))
                }
                
            </Grid>
    </Container>
        
    </>
    )

}