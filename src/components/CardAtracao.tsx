import { Favorite, ThumbDown } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography, styled } from "@mui/material";
import { Atracao } from "../models/atracao.model";
import { useAppDispatch } from "../config/hooks";
import { curtirAtracao, descurtirAtracao } from "../config/modules/atracoesSlice";

interface CardProps {
    atracao: Atracao;
}

const CardActionStyled = styled(CardActions)`
    span {
        font-size: 10px;
        margin-left: 4px;
    }
`;

const StyledCard = styled(Card)`
    height: 100%; 
    margin-bottom: 2em;
    display: flex;
    flex-direction: column; 
`;

const StyledCardContent = styled(CardContent)`
    flex: 1; 
`;

export const CardAtracao = (props: CardProps) => {
    const dispatch = useAppDispatch();
    const curtir = () => {
        dispatch(curtirAtracao(props.atracao.id));
    };

    const descurtir = () => {
        dispatch(descurtirAtracao(props.atracao.id));
    };

    return (
        <StyledCard>
            <CardMedia
                component="img"
                width="100%"
                image={props.atracao.urlFoto} 
            />
            <StyledCardContent>
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
            </StyledCardContent>

            <CardActionStyled>
                <Button color="error" onClick={curtir}>
                    <Favorite /> <span>Curti! ({props.atracao.curtidas})</span>
                </Button>
                <Button onClick={descurtir}>
                    <ThumbDown /> <span>Muito ruim! ({props.atracao.descurtidas})</span> 
                </Button>
            </CardActionStyled>
        </StyledCard>
    );
};
