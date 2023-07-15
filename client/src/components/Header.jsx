

import { AppBar, Toolbar, Box, InputBase, styled } from '@mui/material';
import { Menu as MenuIcon, Tune, HelpOutlineOutlined, SettingsOutlined, 
    AppsOutlined, AccountCircleOutlined, Search } from '@mui/icons-material'

import { gmailLogo } from '../constants/constant';

const StyledAppBar = styled(AppBar)({
    background:'#F5F5F5',
    boxShadow:'none'
});



const SearchBox = styled(Box)({
    background:'#EAF1FB',
    marginLeft:'10%',
    borderRadius:8,
    display:'flex',
    alignItems:'center',
    minWidth:690,
    maxWidth:720,
    height:50,
    justifyContent:'space-between',
    padding:'0% 1%',
    '& > div':{
        width:'100%',
        padding:'0% 3%'
    }
});

const IconWrapper = styled(Box)({
    width:'100%',
    display:'flex',
    justifyContent:'end',
    '& > svg':{
        marginLeft:'5%'
    }
});



const Header = ({ toggleDrawer }) => {

    return (
        <StyledAppBar position="static">
            <Toolbar>
                <MenuIcon color="action" onClick={toggleDrawer} />
                <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />
                <SearchBox>
                    <Search color="action" />
                    <InputBase />
                    <Tune  color="action"/>
                </SearchBox>

                <IconWrapper>
                    <HelpOutlineOutlined color="action" />
                    <SettingsOutlined color="action" />
                    <AppsOutlined color="action" />
                    <AccountCircleOutlined color="action" />
               </IconWrapper>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;