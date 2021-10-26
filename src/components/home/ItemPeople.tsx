import { Card, CardActionArea, Typography } from "@mui/material";
import { useState } from "react";
import { People } from "../../interfaces/People";
import ImageCharacterCard from "./ImageCharacter";
import ModalToShowCharacter from "./ModalToShowCharacter";

export interface StyleProps extends People {
    style?: Record<any, any>
}

function ItemPeople({ ...props }: StyleProps) {
    const [isModalOpen, setModalOpen] = useState(false);

    function closeModal() {
        setModalOpen(false);
    }

    const people: People = Object.assign({},{...props}, { style: null });

    return (
        <Card>
            <CardActionArea style={props.style} onClick={() => setModalOpen(true)}>
                <ImageCharacterCard name={props.name} heigth={"340"}  />
                <Typography variant="body1" align="center" color="textPrimary">
                    { props.name }
                </Typography>
            </CardActionArea>
            { isModalOpen && <ModalToShowCharacter 
                closeIconbuton={closeModal} 
                open={isModalOpen} 
                id={people.id} 
                name={people.name} 
                birth_year={people.birth_year} 
                gender={people.gender} 
                hair_color={people.hair_color} 
                height={people.height} 
                mass={people.mass} 
                skin_color={people.skin_color} 
                films={people.films} 
            /> }
        </Card>
        
    );
}

export default ItemPeople;