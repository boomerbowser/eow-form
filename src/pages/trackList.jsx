import Container from "@mui/material/Container";
import Footer from "../components/footer";
import Header from "../components/header";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useRef, useState } from "react";
import Button from "@mui/material/Button";

export default function TL() {
    const inputRef = useRef();
    const [files, setFiles] = useState([])

    const handleChange = (e) => {
        e.target.files && e.target.files.length > 0 && files.push(e.target.files);
    };
    const handleRemove = (i) => {
        files.pop(i);
    }

    const handleClick = () => {
        inputRef.current.click();
    }

    return (
        <>
        <Header step={1} />
        <Container maxWidth={'xl'} sx={{ minHeight: '80svh', pb: 6 }}>
          <Stack direction={'column'} gap={2} justifyContent={'center'}>
            <Typography pt={3} variant={'h2'} textAlign={'center'} gutterBottom >Track List</Typography>
            <Container maxWidth={'md'}>
                <Box width={'100%'} height={'10rem'}>
                    <input hidden multiple type={'file'} ref={inputRef} onChange={handleChange} />
                    <Button onClick={handleClick} sx={{ width: '100%', height: '100%', borderStyle: 'groove' }} variant={'outlined'}>Browse or drag & drop files here...</Button>
                </Box>
            </Container>
          </Stack>
        </Container>
        <Footer prev={'/details'} next={'/splits'} />
        </>
    );
}