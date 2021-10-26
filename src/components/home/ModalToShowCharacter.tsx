
import { Slide, AppBar,  Dialog, Grid, IconButton, Toolbar, Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { forwardRef, useEffect, useState } from "react";
import { People } from "../../interfaces/People";
import Layout from "../layout/Layout";
import Loading from "./Loading";
import ImageCharacterCard from "./ImageCharacter";

export interface PropsModal extends People  {
    closeIconbuton(): any
    open: boolean
    
}

const Transition = forwardRef(function Transition(props: any, ref: any) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ModalToShowCharacter({ ...props }: PropsModal) {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedMovies, setLoadedMovies] = useState([]);
    const [expanded, setExpanded] = useState("");

    function closeMenu() {
        props.closeIconbuton();
    }

    const handleChange = (panel: any) => (event: React.ChangeEvent<unknown>, isExpanded: boolean) => {
        event.preventDefault();
        setExpanded(isExpanded ? panel : "");
      };

    useEffect(() => {
        setIsLoading(true);

        fetch(`https://swapi.dev/api/films`)
        .then(response => response.json())
        .then((data: any) => {
            const movies: any = [];
            
                if (data.results.length > 0) {
                    data.results.forEach((movie: any) => {
                        const foundMovieInDataResponse = props.films.some((movieCharacter: any) => movie.url === movieCharacter);
                        if (foundMovieInDataResponse) {
                            movies.push({ ...movie })
                        }
                    })
                    setLoadedMovies(movies)
                    
                    setIsLoading(false); 
                } else {
                    setIsLoading(false); 
                }
        });
    }, []);
    
    return (
        <Dialog
        fullScreen
        open={props.open}
        onClose={closeMenu}
        TransitionComponent={Transition}
        PaperProps={{ style: { backgroundColor: "#121010", color: 'white' } }}
      >
        <AppBar style={{ position: 'relative', background: "#b71c1c" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={closeMenu}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      
        <Grid 
            container
            direction="row"
            spacing={0}
            alignContent= 'center'
        > 
            { isLoading ? (
                <Layout>
                    <Loading />
                </Layout>
            ) : (
                <Grid item>
                        <Grid container spacing={0} justifyContent="start">
                            <Grid item xs={3}>
                                <ImageCharacterCard heigth="500" name={props.name}  />
                            </Grid>
                            <Grid item xs={8} style={{margin: 12}}>
                                
                                <Typography variant="h4" align="center" style={{ marginRight: 110, marginTop: 5 }}>
                                    Character: {props.name}
                                </Typography>

                                <Typography variant="h6" align="center" style={{ marginRight: 110, marginTop: 5 }}>
                                    Birth year: {props.birth_year}
                                </Typography>

                                <Typography variant="h6" align="center" style={{ marginRight: 110, marginTop: 5 }}>
                                    Gender: {props.gender}
                                </Typography>

                                <Typography variant="h6" align="center" style={{ marginRight: 110, marginTop: 5 }}>
                                    Hair color: {props.hair_color}
                                </Typography>

                                <Typography variant="h6" align="center" style={{ marginRight: 110, marginTop: 5 }}>
                                    Height: {props.height}
                                </Typography>

                                <Typography variant="h6" align="center" style={{ marginRight: 110, marginTop: 5 }}>
                                    Mass: {props.mass}
                                </Typography>

                                <Typography variant="h6" align="center" style={{ marginRight: 110, marginTop: 5 }}>
                                    Skin color: {props.skin_color}
                                </Typography>


                                <Typography variant="h5" align="center"  style={{ marginRight: 110, marginTop: 5 }}>
                                    Movies:
                                </Typography>
                            </Grid>
                        </Grid>
                    {/* </Grid> */}

                    <Grid container spacing={0} direction="row" justifyContent="end">
                    
                        <Grid item sm={12} md={6}>
                            <div style={{marginTop: 10, marginRight: 5, position: "relative", bottom: 150}}>
                                {
                                    loadedMovies.map((movie: any, index: number) => (
                                        <Accordion key={index.toString()} aria-controls={`panel-${index}-content`} id={`panel-${index}-header`} onChange={handleChange('panel1')}>
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                            >
                                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                                {movie.title}
                                            </Typography>
                                            
                                            </AccordionSummary>
                                            <AccordionDetails>
                                            <Typography>
                                                {movie.opening_crawl}
                                            </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    ))
                                }
                            </div>
                        </Grid>
                        
                    </Grid>
                </Grid>
            )  }
        </Grid>
      </Dialog>
    );
}

export default ModalToShowCharacter;