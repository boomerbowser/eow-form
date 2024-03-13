import Container from "@mui/material/Container";
import Footer from "../components/footer";
import Header from "../components/header";
import FormControl from "@mui/material/FormControl"
import Typography from "@mui/material/Typography"
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup"
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Switch from "@mui/material/Switch";
import Spacer from "../components/spacer";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export default function DE() {
    const [isOpen, setIsOpen] = useState(false);
    const [services, setServices] = useState({
        spotify: false,
        appleMusic: false,
        youtubeMusic: false,
        deezer: false,
        tidal: false,
        sevenDigital: false,
        netEase: false,
        amazon: false,
        pandora: false,
        tencent: false,
        boomplay: false,
        audiomack: false,
        jiosaavn: false,
        resso: false,
        iHeartRadio: false,
        kkbox: false,
        claroMusica: false
    });
    const [numSelected, setNumSelected] = useState(0);
    const [isOld, setIsOld] = useState('false');

    const serviceList = Object.keys(services);

    const handleDialogOpen = () => {
        setIsOpen(true);
    }
    const handleDialogClose = () => {
        const currServices = Object.values(services);
        const selectedVals = currServices.filter( (service) => service === true );
        setNumSelected(selectedVals.length)
        console.log(selectedVals)
        setIsOpen(false);
    }

    const handleSwitchChange = (event) => {
        setServices({
          ...services,
          [event.target.name]: event.target.checked,
        });
      }

    const handleRadioChange = (e) => {
        setIsOld(e.target.value)
    } 

    return (
        <>
        <Header step={3}/>
        <Container maxWidth={'xl'} sx={{ minHeight: '80svh', pb: 6, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
        <Dialog open={isOpen} onClose={handleDialogClose} >
             <Card elevation={12}>
                <CardHeader action={<IconButton onClick={handleDialogClose} color={'error'} aria-label={'close-dialog'}><HighlightOffIcon/></IconButton>} title={'Select Stores'} />
                <Divider variant={'middle'} />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'safe center', pt: 3, maxHeight: 500, overflowY: 'scroll' }}>
                   <Typography variant={'h5'}>Music Services</Typography>
                   <Container maxWidth={'sm'}>
                    <FormControl fullWidth>
                        <FormLabel>Where people can go to listen to your music.</FormLabel>
                        <FormGroup sx={{ pt: 2 }}>
                            {serviceList && serviceList.map( (serv, ind) => (
                                <Box key={ind} display={'flex'} flexDirection={'row'} alignItems={'center'} pb={2}>
                                    <Avatar sx={{ width: 48, height: 48 }} >{serv.charAt(0).toUpperCase()}</Avatar>
                                    <Typography variant={'subtitle1'} sx={{ fontSize: 20, pl: 1 }}>{`${serv.charAt(0).toUpperCase()}${serv.slice(1)}`}</Typography>
                                    <Spacer/>
                                    <Switch name={serv} checked={services.serv} onChange={handleSwitchChange} />
                                </Box>
                            ) )}
                        </FormGroup>
                    </FormControl>
                   </Container>
                </CardContent>
             </Card>
          </Dialog>
            <Typography variant={'h2'} pt={3} gutterBottom>Delivery Options</Typography>
          <Stack direction={'column'} gap={2}>
            <TextField onClick={handleDialogOpen} id={'music-stores'} label={'Music Stores'} defaultValue={`${numSelected} of 24 selected`} InputProps={{ readOnly: true }} />
            <Typography variant={'subtitle1'}>Type the names of any countries you wish NOT to distribute to (separated by commas)</Typography>
            <TextField id={'countries'} label={'Excluded Countries'} placeholder={'e.g. "Brazil, USA, France"'} multiline />
            <Typography>Has this release been published/released before?</Typography>
            <FormControl>
                <RadioGroup row name={'old-release-checker'} value={isOld} onChange={handleRadioChange} >
                   <FormControlLabel value={'true'} label={'Yes'} control={<Radio/>} />
                   <FormControlLabel value={'false'} label={'No'} control={<Radio/>} />
                </RadioGroup>
            </FormControl>
            {isOld === 'true' && 
              <>
              <Typography>When was this release first published?</Typography>
              <TextField type={'date'} />
              </>
            }
          </Stack>
        </Container>
        <Footer prev={'/splits'} next={'/review'} />
        </>
    );
}