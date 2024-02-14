import { Header } from "./components/Header";
import { Container, Grid } from "@mui/material";
import { CardAtracao } from "./components/CardAtracao";
import { Atracao } from "./models/atracao.model";


export function Root() {

    const fresno: Atracao = {
        id: "1",
        nome: "Fresno",
        descricao: "Fresno",
        horario: "18:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-fresno.png"
    }

    return (
    <>
    <Header />
        <Container>
            <h1>Line up</h1>

            <Grid container>

                <Grid item xs={12} sm={4} md={3} lg={3} xl={1}>
                    <CardAtracao atracao={fresno} />
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={3} xl={1}>
                    <CardAtracao atracao={fresno} />
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={3} xl={1}>
                    <CardAtracao atracao={fresno} />
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={3} xl={1}>
                    <CardAtracao atracao={fresno} />
                </Grid>
                
            </Grid>
    </Container>
        
    </>
    )

}