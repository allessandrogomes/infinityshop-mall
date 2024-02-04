import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from './Logo';
import NavLink from './NavLink';
import CampoDePesquisa from './CampoDePesquisa';
import IconeFavoritos from './ItemFavoritos';
import ItemCarrinho from './ItemCarrinho';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ my: 4 }}>
                <Logo />
            </Typography>
            <Divider />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <NavLink itemLink='Home' />
                <NavLink itemLink='Contact' />
                <NavLink itemLink='About' />
                <NavLink itemLink='Sign Up' />
            </div>
            <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column', marginTop: '30px', gap: '10px' }}>
                    <IconeFavoritos />
                    <ItemCarrinho />
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{ position: 'initial', backgroundColor: '#FFF', boxShadow: 'none', m: '30px 0 15px 0' }} component="nav">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { lg: 'none' }, backgroundColor: '#000' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ display: { xs: 'none', md: 'block' } }}
                    >
                        <Logo />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                        <div style={{ display: 'flex', gap: '48px' }}>
                            <NavLink itemLink='Home' />
                            <NavLink itemLink='Contact' />
                            <NavLink itemLink='About' />
                            <NavLink itemLink='Sign Up' />
                        </div>
                    </Box>
                    <CampoDePesquisa />
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '10px' }}>
                            <IconeFavoritos />
                            <ItemCarrinho />
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}