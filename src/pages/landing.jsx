import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import recordBig from "../assets/recordBigShadow.png"
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <Container sx={{ display: 'flex', directtion: 'column', minWidth: '100svw', maxWidth: '100vw', minHeight: '100svh', alignItems: 'center', justifyContent: 'center' }}>
            <Paper elevation={8} sx={{ borderRadius: 5, p: 4 }}>
                <Box>
                    <Stack direction={'column'} sx={{ justifyContent: 'center' }}>
                        <Typography variant={'h2'} textAlign={'center'}>Welcome!</Typography>
                        <Box component={'figure'} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={recordBig} alt={''} width={200} height={200} />
                        </Box>
                        <Typography variant={'h4'} gutterBottom textAlign={'center'}>EOW Music Submission Form</Typography>
                        <Button onClick={() => navigate('/details')} variant={'contained'} size={'large'} sx={{ borderRadius: 10 }}>Start</Button>
                    </Stack>
                </Box>
            </Paper>
        </Container>
    );
}