import React, { ReactNode } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  InputBase,
  
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,

  Toolbar,
  Typography,
  alpha,
  styled,
  useTheme,
} from "@mui/material";
import BlankLayout from "src/@core/layouts/BlankLayout";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
const drawerWidth = 240;
const Data=[
  {
  "id":1,
  "title":"Mochi",
  "des":"Mochi (pronounced MOE-chee) is a Japanese dessert made of sweet glutinous rice flour or mochigome. Mochi dough is often tinted with green tea powder (matcha) or other food colorings and wrapped around a sweet center to form a small, bite-sized confection with a chewy, smooth, elastic texture.",
  "img":"/images/pages/th-1.jpg"

},
{
  "id":2,
  "title":"Hayashi rice",
  "des":"Hayashi rice is a dish popular in Japan as a Western-style dish or yōshoku. It usually contains beef, onions, and button mushrooms, in a thick demi-glace sauce which often contains red wine and tomato sauce. This sauce is served atop or alongside steamed rice. The sauce is sometimes topped with a drizzle of fresh cream.",
  "img":"/images/pages/th-2.jpg"
},
{
  "id":3,
  "title":"Okowa",
  "des":"Okowa is a Japanese steamed rice dish made with glutinous rice mixed with meat or vegetables.[1] It is sometimes combined with wild herbs (sansai okowa) and vessel chestnuts (kuri okowa).[2] It is generally boiled glutinous rice blended with Azuki beans to give it red color for festive look, made by boiling regular rice with Azuki beans.",
  "img":"/images/pages/th-3.jpg"
  
},
{
  "id":4,
  "title":"Kamameshi",
  "des":"Kamameshi literally translates to kettle rice and is a traditional Japanese rice dish cooked in an iron pot called a kama. Kamameshi originally referred to rice that was eaten communally from the kama. Coworkers or family members either ate directly from the kama pot or by transferring the rice to individual bowls.",
  "img":"/images/pages/th-4.jpg"
}
,
{
  "id":5,
  "title":"Mochi",
  "des":"Mochi (pronounced MOE-chee) is a Japanese dessert made of sweet glutinous rice flour or mochigome. Mochi dough is often tinted with green tea powder (matcha) or other food colorings and wrapped around a sweet center to form a small, bite-sized confection with a chewy, smooth, elastic texture.",
  "img":"/images/pages/th-1.jpg"

},
{
  "id":6,
  "title":"Hayashi rice",
  "des":"Hayashi rice is a dish popular in Japan as a Western-style dish or yōshoku. It usually contains beef, onions, and button mushrooms, in a thick demi-glace sauce which often contains red wine and tomato sauce. This sauce is served atop or alongside steamed rice. The sauce is sometimes topped with a drizzle of fresh cream.",
  "img":"/images/pages/th-2.jpg"
},
{
  "id":7,
  "title":"Okowa",
  "des":"Okowa is a Japanese steamed rice dish made with glutinous rice mixed with meat or vegetables.[1] It is sometimes combined with wild herbs (sansai okowa) and vessel chestnuts (kuri okowa).[2] It is generally boiled glutinous rice blended with Azuki beans to give it red color for festive look, made by boiling regular rice with Azuki beans.",
  "img":"/images/pages/th-3.jpg"
  
},
{
  "id":8,
  "title":"Kamameshi",
  "des":"Kamameshi literally translates to kettle rice and is a traditional Japanese rice dish cooked in an iron pot called a kama. Kamameshi originally referred to rice that was eaten communally from the kama. Coworkers or family members either ate directly from the kama pot or by transferring the rice to individual bowls.",
  "img":"/images/pages/th-4.jpg"
}
] 

const AppBarContainer = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = useTheme();

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBarContainer position="fixed" sx={{ background: "#063970" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color={"white"}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Typography style={{ marginLeft: 'auto' }}>
            <Button variant='text' sx={{ color: 'white' }} href='/card'>
              Cart(0)
            </Button>
          </Typography>
          <Typography >
            <Button variant="contained" sx={{ background: "#063970" }} href='/login'>
              Login
            </Button>
          </Typography>
        </Toolbar>
      </AppBarContainer>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>

    </Box>
  
        <Box sx={{ paddingTop: "64px" }}>
          <Container maxWidth="lg">
            <Grid container spacing={5} style={{ marginTop: "20px" }}>
                {Data.map((rs, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <Card sx={{ maxWidth: 345, height: "100%", display: "flex", flexDirection: "column" }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={rs.img}
                        style={{ width: '100%' }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {rs.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {rs.des}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: 'space-between' }}>
                        <Button size="small">Add to Cart</Button>
                        <Button  size="small" href="/productdet">More Info</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
             
          </Container>
        </Box>
      
</>
  );
};

Header.guestGuard = true;
Header.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default Header;
