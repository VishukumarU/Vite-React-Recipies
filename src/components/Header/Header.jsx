import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from "react-router-dom";

const Header = () => {

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography sx={{ flexGrow: 1 }} />
                <Button component={RouterLink} to="/login" color="inherit" style={{
                    '&:hover': {
                        backgroundColor: '#fff',
                        color: '#3c52b2',
                    }
                }}>Login</Button>
            </Toolbar>
        </AppBar>
    );

};

export default Header