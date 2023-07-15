import { useState } from 'react';
import { Button, List, ListItem, Box, styled } from '@mui/material';
import ComposeMail from './ComposeMail';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import { CreateOutlined } from '@mui/icons-material';
import { NavLink, useParams } from 'react-router-dom';
import { routes } from '../routes/routes';


const ComposeButton = styled(Button)({
    backgroundColor:'#c2e7ff',
    color:'#001d35',
    padding:16,
    borderRadius:16,
    minWidth:150,
    textTransform:'none'
})

const Container = styled(Box)({
    padding:8,
    '& > ul':{
        padding : '10px 0 0 5px',
        fontSize:14,
        fontweight:500,
        cursor:'pointer',
        '& > a':{
            textDecoration:'none',
            color:'inherit'
        }
    },

    '& > ul > a > li > svg':{
        marginRight:25
    }
});



const SideBarContent = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const { type } = useParams();

    const onComposeClick = () => {
        setOpenDrawer(true);
    }

    return (
        <Container>
            <ComposeButton onClick={() => onComposeClick()}>
                <CreateOutlined style={{ marginRight: 10 }} />Compose
            </ComposeButton>
            <List>
                {
                    SIDEBAR_DATA.map(data => (
                        <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                            <ListItem style={ type === data.name.toLowerCase() ? {
                                backgroundColor: '#d3e3fd',
                                borderRadius: '0 16px 16px 0'
                            } : {}}><data.icon fontSize="small" />{data.title}</ListItem>
                        </NavLink>
                    ))
                }
            </List>
            <ComposeMail open={openDrawer} setOpenDrawer={setOpenDrawer} />
        </Container>
    )
}

export default SideBarContent;