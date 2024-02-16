import { Box, Typography } from "@mui/material";

export function Footer() {
    return (
        <Box sx={{ backgroundColor: "#333", color: "#fff", textAlign: "center", padding: "1rem", marginTop: "2rem", }}>
            <Typography variant="body1">
                Resultado final da atividade prática sobre Redux e Material UI.
            </Typography>
            <Typography variant="body2">
                Desenvolvido por Jessica Sobreira 2024
            </Typography>
        </Box>
    );
}
