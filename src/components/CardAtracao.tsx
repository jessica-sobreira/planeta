import { Favorite, ThumbDown } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography, styled } from "@mui/material";
import { Atracao } from "../models/atracao.model";
import { useAppDispatch } from "../config/hooks";

interface CardProps {
    atracao: Atracao;
}

const CardActionStyled = styled(CardActions)`
    span {
        font-size: 10px;
        margin-left: 4px;
    }
`

export const CardAtracao = (props: CardProps) => {
    const dispatch = useAppDispatch();
    const curtir = () => {
        dispatch(curtir(props.atracao.id));
    }


    return (
        <Card>
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

            <CardActionStyled>
                <Button color="error" onClick={curtir}>
                    <Favorite /> <span>Curti! ({props.atracao.curtidas})</span>
                </Button>
                <Button>
                    <ThumbDown /> <span>Muito ruim! ({props.atracao.descurtidas})</span> 
                </Button>
            </CardActionStyled>
        </Card>
    );
};
