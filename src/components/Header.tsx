import { AppBar, Avatar, Switch, Toolbar, styled } from "@mui/material";
import { useAppDispatch } from "../config/hooks";
import { mudarTheme } from "../config/modules/theme.slice";

const ToolbarStyled = styled(Toolbar)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        font-family: "Protest Riot";
    }
`;

export const Header = () => {
    const dispatch = useAppDispatch()

    const mudarTema = () => {
        dispatch(mudarTheme())
    }


    return (
        <AppBar position="static">
            <ToolbarStyled>
                <Avatar src="https://res.cloudinary.com/netpdv/image/upload/c_fit,q_80/rw29rc5qicvxeova0dyr" />

                <div>
                    <h2>PLANETA ATLÂNTIDA 2024</h2>
                </div>

                <div>
                <Switch onChange={mudarTema} /> Dark Mode
                </div>
            </ToolbarStyled>
        </AppBar>
    );
};
