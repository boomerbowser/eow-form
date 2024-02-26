import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Footer({ prev, next }) {
    const navigate = useNavigate();

    const handlePrev = () => {
        navigate(prev);
    };
    const handleNext = () => {
        navigate(next);
    };

    return (
        <Paper sx={{ borderTop: 0.1, borderTopColor: 'text.secondary', borderRadius: 0 }}>
            <Stack direction={'row'} sx={{ width: '100%', p: 2, pl: 1, minHeight: 'max-content' }}>
              <Button onClick={handlePrev} >Back</Button>
              <div style={{ flexGrow: 1 }}></div>
              <Button onClick={handleNext} >Next</Button>
            </Stack>
        </Paper>
    );
}