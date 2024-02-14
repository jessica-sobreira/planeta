import { Favorite, ThumbDown } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography, styled } from "@mui/material";
import { Atracao } from "../models/atracao.model";

interface CardProps {
    atracao: Atracao;
}

const CardStyled = styled(Card)`
    margin: 0px;
`

export const CardAtracao = (props: CardProps) => {
    return (
        <CardStyled>
            <CardMedia
                component="img"
                width="100%"
                height="200%"
                image={props.atracao.urlFoto}
            />
            <CardContent>
                <Typography variant="h5" color="primary">{props.atracao.nome}</Typography>
                <Typography variant="body1">
                    {props.atracao.descricao}
                </Typography>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Box>
                    <Typography component={"span"} variant="button">
                        Horário:
                    </Typography>
                    <Typography component={"span"} variant="body2">
                    {props.atracao.horario}
                    </Typography>
                </Box>
            </CardContent>

            <CardActions>
                <Button color="error">
                    <Favorite /> <span>Curti! ({props.atracao.curtidas})</span>
                </Button>
                <Button>
                    <ThumbDown /> Muito ruim! ({props.atracao.descurtidas})
                </Button>
            </CardActions>
        </CardStyled>
    );
};
