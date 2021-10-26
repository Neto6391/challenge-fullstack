import { Grid } from "@mui/material";
import { ReactChild, ReactFragment, ReactPortal } from "react";

function Layout(props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
    return (
        <Grid container direction="row" justifyContent="center" alignContent="center">
            <Grid item>
                {props.children}
            </Grid>
        </Grid>
    )
}

export default Layout;