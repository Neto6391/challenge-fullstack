import { Box, CircularProgress } from "@mui/material";


function Loading() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <CircularProgress color="secondary" size={150} />
        </Box>
    );
}

export default Loading;