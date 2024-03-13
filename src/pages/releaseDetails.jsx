import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { MuiFileInput } from "mui-file-input";
import { pageData } from "./pageData/rdData";
import AddIcon from "@mui/icons-material/Add";

export default function RD() {
    const [inputValues, setInputValues] = useState({
      releaseName: '',
      recordLabel: '',
      genre: '',
      language: '',
      artFile: null
    });

    const genres = Object.values(pageData.genres);
    const langs = Object.values(pageData.languages);

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInputValues( values => ({ ...values, [name]: value }) );
    };

    return (
        <>
          <Header step={0} />
          <Container maxWidth={'xl'} sx={{ minHeight: '80svh', pb:6 }}>
            <Stack direction={'column'} justifyContent={'center'}>
                <Typography p={2} pt={4} variant={'h2'} textAlign={'center'} >Release Details</Typography>
                
                <Container maxWidth={'sm'}>
                  <Box component={'form'} encType={'multipart/form-data'} method={'post'} name={'release-details-form'} display={'flex'} gap={4} flexDirection={"column"} justifyContent={'center'}>
                    <TextField id={'release-name'} name={'releaseName'} value={inputValues.releaseName || ''} onChange={handleChange} label={'Release Title'} />
                    <TextField id={'label-name'} name={'recordLabel'} value={inputValues.recordLabel || ''} onChange={handleChange} label={'Label'} />
                    <FormControl>
                      <InputLabel id={'genre'} >Genre</InputLabel>  
                      <Select name={'genre'} id={'genre'} value={inputValues.genre || ''} onChange={handleChange} label={'Genre'} >
                        {genres.map( (genre) => (
                          <MenuItem key={genre} value={genre}>
                            {genre}
                          </MenuItem>
                        ) )}
                      </Select>
                    </FormControl>
                    <FormControl>
                      <InputLabel id={'language'} >What language is your release in?</InputLabel>
                      <Select name={'language'} id={'language'} value={inputValues.language || ''} onChange={handleChange} label={'What language is your release in?'} >
                        {langs.map( (lang) => (
                          <MenuItem key={lang} value={lang}>
                            {lang}
                          </MenuItem>
                        ) )}  
                      </Select>
                    </FormControl>
                  </Box>
                </Container>
                <Typography textAlign={'center'} pt={3} gutterBottom variant={'h4'}>Cover Art</Typography>
                <Container maxWidth={'md'} sx={{ display: 'flex', flexDirection: 'row' }} >
                  <Box component={'form'} sx={{ width: '15rem', minHeight: '15rem', position: 'relative', justifySelf: 'flex-start' }}>
                    <MuiFileInput name={'artFile'} inputProps={{ sx: { width: '15rem', height: '15rem' } }} value={inputValues.artFile || null} onChange={handleChange} />
                    <AddIcon fontSize="large" sx={{ position: 'absolute', top: 125, bottom: 0, left: 130, right: 0 }}/>
                  </Box>
                  <div style={{ flexGrow: 1 }}>

                  </div>
                  <Stack direction={'column'} maxWidth={'24rem'} justifySelf={'flex-end'} >
                    <Typography gutterBottom>Cover art must be a square .jpg or .png file and be at least 3000x3000 px, max 6000x6000 px, not blurry or pixelated.</Typography>
                    <Typography flexWrap={'wrap'}>
                       <strong>It cannot contain:</strong>
                       <br/>
                       <ul>
                        <li>Social media logos or handles</li>
                        <li>Brand logos</li>
                        <li>Any text except for artist names and/or the name of the release</li>
                       </ul>   
                    </Typography>
                    <Typography>If it contains any of the above, your release may be rejected (guidelines set by streaming services).</Typography>
                  </Stack>
                </Container>
            </Stack>
          </Container>
          <Footer prev={'/'} next={'/tracklist'} />
        </>
    );
}