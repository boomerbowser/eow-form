import Container from "@mui/material/Container";
import Footer from "../components/footer";
import Header from "../components/header";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import Avatar from "@mui/material/Avatar";
import { NumberInput } from "../components/numberInput";
import Spacer from "../components/spacer";
import TextField from "@mui/material/TextField";

export default function SP() {
    const [people, setPeople] = useState([]);
    const [initials, setInitials] = useState([]);
    const [partials, setPartials] = useState([]);

    const handleAddPerson = () => {
        setPeople([ ...people, '?']);
    };
    const handleRemove = (currIndex) => {
        const newPeople = people.filter((_, index) => index !== currIndex);
        setPeople(newPeople);
        const newPartials = partials.filter((_, index) => index !== currIndex);
        setPartials(newPartials);
        console.log(partials)
    };
    
    const handleTextInputChange = (e) => {
        let name = e.target.value;
        setInitials([...initials, name.charAt(0)])
    };

    const handleNumberInputChange = (e) => {
        setPartials([...partials, e.target.value]);
    };

    return (
        <>
        <Header step={2} />
        <Container maxWidth={'xl'} sx={{ minHeight: '80svh', pb: 6 }}>
          <Typography variant={'h2'} textAlign={'center'} gutterBottom pt={4}>Royalty Splits</Typography>
          <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} gap={3}>
            {people && people.map( (person, index) => (
                <Container key={index} maxWidth={'md'}>
                    <Card variant={'elevation'}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Avatar sx={{ width: 82, height: 82 }}>{initials[index] || person}</Avatar>
                        <Spacer/>
                        <Stack direction={'column'} gap={2}>
                            <TextField id={`person-${index}`} onChange={handleTextInputChange} label={'Name'}   />
                            <TextField id={`email-${index}`} label={'Email'} type={'email'} />
                            <TextField id={`phone-${index}`} label={'Phone'} type={'tel'} />
                        </Stack>
                        <Spacer/>
                        <NumberInput onChange={handleNumberInputChange} placeholder={'&'} id={`percentage-${index}`} min={0} max={100} />
                        <Spacer/>
                        <IconButton onClick={() => handleRemove(index)} color={'error'} aria-label={'delete-person-card'}>
                            <DeleteOutlineTwoToneIcon/>
                        </IconButton>
                        </CardContent>
                    </Card>
                </Container>
    ) 
              )
            }
            <Container maxWidth={'xs'}>
                <Card variant={'elevation'}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                         <Typography>Total: {'0'}%</Typography>
                    </CardContent>
                </Card>
            </Container>
            <Button onClick={handleAddPerson} size={'large'} sx={{ maxWidth: '50%' }}>Add Person</Button>
          </Stack>
        </Container>
        <Footer prev={'/tracklist'} next={'/delivery'} />
        </>
    );
}