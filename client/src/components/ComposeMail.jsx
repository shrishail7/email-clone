


import { useState } from 'react';

import { Dialog, styled, Typography, Box, InputBase, TextField, Button } from '@mui/material'; 
import { Close, DeleteOutline } from '@mui/icons-material';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';

const DialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: "10px 10px 0 0"
};

const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    backgroundColor: "#f2f6fc",
    '& > p': {
        fontSize: 14,
        fontWeight: 700
    }
});


const RecipientsWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div ': {
        fontSize: 14,
        borderBottom: '1px solid #F5F5F5',
        marginTop: 10
    }
});

const SendButton = styled(Button)({
    background: '#0B57D0',
    color: '#ffffff',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: 18,
    width: 100
});


const Footter = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: "20px 15px",
    alignItems: 'center'
});



const ComposeMail = ({ open, setOpenDrawer }) => {
    const [data, setData] = useState({});
    const sentEmailService = useApi(API_URLS.saveSentEmails);
    const saveDraftService = useApi(API_URLS.saveDraftEmails);

    const config = {

        Username:"codeedu1278@yopmail.com",
        Password:"187C6D1381F43EC400D8F79A4EEFC271631A",
       
        Host: 'smtp.elasticemail.com',
        Port: 2525,
    }


    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const sendEmail = async (e) => {
        e.preventDefault();

        if (window.Email) {
            window.Email.send({
                ...config,
                To: data.to,
                From: "shrishaildolle7878@gmail.com",
                Subject: data.subject,
                Body: data.body,
               
            }).then(
                message => alert(message)
            );
        }
        

        const payload = {
            to : data.to,
            from : "shrishaildolle7878@gmail.com",
            subject : data.subject,
            body : data.body,
            date: new Date(),
            image: '',
            name: 'Code for Interview',
            starred: false,
            type: 'sent'
        }

        sentEmailService.call(payload);

        if (!sentEmailService.error) {
            setOpenDrawer(false);
            setData({});
        } else {

        }
    }

    const closeComposeMail = (e) => {
        e.preventDefault();

        const payload = {
            to : data.to,
            from : "shrishaildolle7878@gmail.com",
            subject : data.subject,
            body : data.body,
            date: new Date(),
            image: '',
            name: 'Code for Interview',
            starred: false,
            type: 'drafts'
        }

        saveDraftService.call(payload);

        if (!saveDraftService.error) {
            setOpenDrawer(false);
            setData({});
        } else {

        }
    }

    return (
        <Dialog
            open={open}
            PaperProps={{ sx: DialogStyle }}
        >
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
            </Header>
            <RecipientsWrapper>
                <InputBase placeholder='Recipients' name="to" onChange={(e) => onValueChange(e)} value={data.to} />
                <InputBase placeholder='Subject' name="subject" onChange={(e) => onValueChange(e)} value={data.subject} />
            </RecipientsWrapper>
            <TextField
                multiline
                rows={20}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                name="body"
                onChange={(e) => onValueChange(e)}
                value={data.body}
            />
            <Footter>
                <SendButton onClick={(e) => sendEmail(e)}>Send</SendButton>
                <DeleteOutline onClick={() => setOpenDrawer(false)} />
            </Footter>
        </Dialog>
    )
}

export default ComposeMail;