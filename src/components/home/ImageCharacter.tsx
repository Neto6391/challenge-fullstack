import { useMemo } from "react";
import { ImageCharacter } from "../../interfaces/ImageCharacter";
import characterWithImage from "../../data/characterWithImage.json";
import CardMedia from "@mui/material/CardMedia";


function ImageCharacterCard({...props}: ImageCharacter) {

    const getCharacterImageURL: any = useMemo(() => () => (characterWithImage.filter((character: any) => character.name === props.name )[0]), [props.name] );
    
    characterWithImage.filter((character: any) => character.name === props.name );

    const characterImage: Record<string, unknown> = Object.assign({}, getCharacterImageURL());
    return (
        characterImage && characterImage.image ? (
            <CardMedia 
            component="img"
            height={props.heigth}
            image={getCharacterImageURL().image} />) : (<p></p>));
}

export default ImageCharacterCard;