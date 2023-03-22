import React, { useContext } from 'react'
import './Head.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import jwt_decode from 'jwt-decode'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Head() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate()
  console.log(window.location.pathname)
  const {token,setTokens}=useContext(UserContext)
  {token?console.log("head",token):console.log("Null")}
  // let decode = jwt_decode(token)
  const logout = ()=>{
    localStorage.clear()
    setTokens(null)
    if (window.location.pathname==='/partner-home'){
      navigate('/partner_login')
    }
  }
  return (
    <div>
        {/* <div className="head">
            <div className="logo">
                <img src="/Logo/logo-trans.png" alt="logo" />
            </div>
              {window.location.pathname==='/admin'?<div></div>:
            <div className="links">
            <p><Link className='link-head' to="/">Home</Link></p>
            <p><Link className='link-head' to="/partner_login">Partner</Link></p>
                {token?<span><p onClick={logout}>Logout</p></span>:<span><p><Link className='link-head' to="/login">Login</Link></p></span>}
                <p><Link className='link-head' to="/contact">Contact</Link></p>
            </div>}
        </div> */}
        <AppBar position="static" style={{ background: '#ffffff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO */}
            {/* <div className="logo">
                <img src="/Logo/logo-trans.png" alt="logo" />
            </div> */}
          {/* </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => ( */}
                <MenuItem onClick={handleCloseNavMenu}>
                  {window.location.pathname==='/admin'?<div></div>:
            <div className="links">
            <p><Link className='link-head' to="/">Home</Link></p>
            <p><Link className='link-head' to="/partner_login">Partner</Link></p>
                {token?<span><p onClick={logout}>Logout</p></span>:<span><p><Link className='link-head' to="/login">Login</Link></p></span>}
                <p><Link className='link-head' to="/contact">Contact</Link></p>
            </div>
            }
                </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
           <div className="logo">
                <img src="/Logo/logo-trans.png" alt="logo" />
            </div>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {window.location.pathname==='/admin'?<div></div>:
            <div className="links">
            <p><Link className='link-head' to="/">Home</Link></p>
            <p><Link className='link-head' to="/partner_login">Partner</Link></p>
                {token?<span><p onClick={logout}>Logout</p></span>:<span><p><Link className='link-head' to="/login">Login</Link></p></span>}
                <p><Link className='link-head' to="/contact">Contact</Link></p>
            </div>}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
}

export default Head