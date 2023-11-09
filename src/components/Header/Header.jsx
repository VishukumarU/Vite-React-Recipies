import { AppBar, Box, Button, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link as RouterLink } from "react-router-dom";

const Header = () => {

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end' }}>
                    <FoodBankIcon sx={{ fontSize: "2.5rem" }} />
                    <Typography sx={{ ml: "1rem", fontSize: "1.3rem" }}>React Recipes</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title="Settings" >
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <SettingsIcon />
                        </IconButton>
                    </Tooltip>
                    <Button component={RouterLink} to="../login" color="inherit" sx={{
                        '&:hover': {
                            color: 'inherit'
                        }
                    }}>Login</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );

};

export default Header