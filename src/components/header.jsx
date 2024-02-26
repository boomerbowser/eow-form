import Stepper from "@mui/material/Stepper";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ['Release Details', 'Track List', 'Splits', 'Delivery Options', 'Review'];

export default function Header(props) {

    return (
        <Paper elevation={6}>
            <Container sx={{ maxWidth: '100%', minHeight: 'max-content', p: 2 }}>
                <Stepper activeStep={props.step || 0}>
                  {steps.map((label, index) => {

                    return (
                        <Step key={label} completed={props.step > index ? true : false}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                  })}
                </Stepper>
            </Container>
        </Paper>
    );
}