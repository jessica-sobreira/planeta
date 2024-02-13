import { Header } from "./components/Header";
import { Container } from "@mui/material";
import { CardAtracao } from "./components/CardAtracao";


export function Root() {
    <>
    <Header />
        <Container>
            <h1>Teste</h1>
        <CardAtracao />
    </Container>
    </>
}